'use client';

import { PropsWithChildren } from 'react';
import { cn } from "../../../utils/cn"
type Props = {
  className?: string;
};

export function TabMenu(props: PropsWithChildren<Props>) {
  return (
    <div className={cn('flex gap-2 w-full z-10', props.className)}>
      {props.children}
    </div>
  );
}
