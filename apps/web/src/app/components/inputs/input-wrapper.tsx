import { cn } from '@app/components/utils';
import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
  role?: string;
  focus?: boolean;
  focusable?: boolean;
  disabled?: boolean;
};

export function InputWrapper(props: PropsWithChildren<Props>) {
  return (
    <div
      className={cn(
        'flex items-center w-full rounded-md border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground',
        'focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
        '[&>.input]:bg-transparent [&>.input:focus-visible]:outline-none',
        props.focus && 'outline-none ring-2 ring-ring ring-offset-2',
        props.disabled && 'cursor-not-allowed opacity-50',
        props.className
      )}
      role={props.role}
      tabIndex={props.focusable ? 0 : undefined}
    >
      {props.children}
    </div>
  );
}
