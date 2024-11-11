'use client';

import { PropsWithChildren } from 'react';
import { cn } from "../../../utils/cn"

type TabProps = {
  className?: string;
};

export function Tab({ className, children }: PropsWithChildren<TabProps>) {
  return <div className={cn('flex flex-col', className)}>{children}</div>;
}
