import { FC } from 'react';

type Props = {
  tab: string;
  tag: string;
  body: FC;
};

export function TabBody(props: Props) {
  if (props.tab !== props.tag) return null;

  const Component = props.body;
  return <Component />;
}
