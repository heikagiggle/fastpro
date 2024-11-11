'use client';

import { PropsWithChildren } from 'react';

import { useSearchParams } from 'next/navigation';
import { cn } from '../../../utils/cn';
import Link from 'next/link';

interface Props {
  tag: string;
  className?: string;
}

export function TabMenuItem({
  tag,
  children,
  className,
}: PropsWithChildren<Props>) {
  const searchParams = useSearchParams();
  const active = searchParams.get('tab');

  return (
    <Link
      tabIndex={0}
      title={`Go to ${tag}`}
      className={cn(
        'py-2 px-4 ease-in duration-200 cursor-pointer text-sm rounded-md font-medium text-muted-foreground',
        'hover:text-[#7209B7]',
        active === tag && 'text-[#7209B7]',
        className
      )}
      href={`?tab=${tag}`}
      prefetch={false}
    >
      {children}
    </Link>
  );
}
