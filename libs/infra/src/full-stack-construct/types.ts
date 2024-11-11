import * as iam from 'aws-cdk-lib/aws-iam';
import * as events from 'aws-cdk-lib/aws-events';

export type FullStackConstructProps = {
  appId: string;
  auth?: { groups?: string[] };
  storage?: { retainOnDelete?: boolean };
  database?: boolean;
  apps?: Record<string, App>;
  events?: {
    messages?: AppMessage[];
    cron?: AppCron[];
  };
  cdn?: { routes: Record<string, AppRef | ResourceRef> };
  secrets?: Record<string, string | undefined>;
};

export enum AppType {
  NEST = 'nest',
  NEST_API = 'nestApi',
  NEXT_APP_ROUTER = 'nextAppRouter',
}

export type AppCapability = {
  auth?: boolean;
  storage?: boolean;
  database?: boolean;
  queue?: { batchSize?: number };
};

export type App = {
  type: AppType;
  output: string;
  connections?: AppCapability;
  command: string;
};

export type AppProperties = {
  queue?: { batchSize?: number };
  role?: iam.Role;
  env?: Record<string, string>;
  buildPaths: Record<string, string>;
  output: string;
};

export enum AppResourceType {
  UPLOADS = 'uploads',
  AUTH = 'auth',
}

export type AppRef = { $app: string };
export type ResourceRef = { $resource: AppResourceType };

export type AppMessage = AppRef & {
  messages: string[];
  publish?: boolean;
};

export type AppCron = {
  messages: string[];
  cron: events.CronOptions;
};

/**
 * Enable SNS Events
 * */
export type AppEvent = {
  publishers?: AppRef[];
};
