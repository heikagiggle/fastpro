import { cn } from '@app/components/utils';
import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export function InputGroup({ children, className }: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        'py-2 px-3 flex gap-2 items-center border-2 rounded-md border-[#0A0D1408]',
        '[&>.input]:bg-transparent [&>.input:focus-visible]:outline-none',
        className
      )}
    >
      {children}
    </div>
  );
}
