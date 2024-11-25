
import React from 'react';


import { Card } from '@app/components/lib/ui/card';
import { cn } from '@app/components/utils/cn';

type StatCardProps = {
  title: string;
  value: number | string;
  className?: string;
};


export function StatCard(props: StatCardProps) {
  return (
    <Card className={cn('gap-5 flex flex-col p-3', props.className)}>
      <p className='text-[#666666] text-sm'>{props.title}</p>
      <p className={'text-2xl font-medium mb-2'}>{props.value}</p>
    </Card>
  );
}
