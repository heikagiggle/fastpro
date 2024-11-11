import * as cdk from 'aws-cdk-lib';
import * as sns from 'aws-cdk-lib/aws-sns';
import * as snsSubscriptions from 'aws-cdk-lib/aws-sns-subscriptions';
import { Construct } from 'constructs';

import { NestStack } from './nestStack';
import { NextAppRouterStack } from './nextAppRouterStack';
import { FullStackConstructProps } from './types';
import * as events from 'aws-cdk-lib/aws-events';
import * as eventsTarget from 'aws-cdk-lib/aws-events-targets';

interface Props extends cdk.NestedStackProps {
  appId: string;
  events: FullStackConstructProps['events'];
  apps: Record<string, NextAppRouterStack | NestStack>;
}

export class EventStack extends cdk.NestedStack {
  public readonly topic: sns.Topic;

  constructor(scope: Construct, id: string, props: Props) {
    super(scope, id, props);

    this.topic = new sns.Topic(this, 'AppTopic');

    for (const i in props.events?.messages ?? []) {
      const appMessage = props.events?.messages?.[i];
      if (!appMessage) continue;

      const app = props.apps[appMessage.$app];
      if (!app) throw new Error(`${appMessage.$app} not found`);

      const filterPolicy: snsSubscriptions.SubscriptionProps = {
        filterPolicyWithMessageBody: {
          message: sns.FilterOrPolicy.filter(
            sns.SubscriptionFilter.stringFilter({
              allowlist: appMessage.messages,
            })
          ),
        },
      };

      if (appMessage.publish) {
        this.topic.grantPublish(app.function);
      }

      if (app.queue) {
        this.topic.addSubscription(
          new snsSubscriptions.SqsSubscription(app?.queue, filterPolicy)
        );
      } else {
        this.topic.addSubscription(
          new snsSubscriptions.LambdaSubscription(app.function, filterPolicy)
        );
      }
    }

    for (const i in props.events?.cron ?? []) {
      const job = props.events?.cron?.[i];
      if (!job) continue;

      for (const message of job.messages) {
        new events.Rule(this, `ScheduleRule${i}${message}`, {
          schedule: events.Schedule.cron(job.cron),
          targets: [
            new eventsTarget.SnsTopic(this.topic, {
              message: events.RuleTargetInput.fromObject({
                message,
              }),
            }),
          ],
        });
      }
    }
  }
}
