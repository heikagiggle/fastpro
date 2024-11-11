import { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonArrowIcon } from './button-arrow-icon';
import { cn } from '@app/components/utils';
import { Button } from '@app/components/lib/ui/button';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
  inverse?: boolean;
  withArrow?: boolean;
  text?: string;
}

export function ButtonComponent({
  children,
  className,
  inverse,
  text,
  withArrow,
  ...props
}: ButtonProps) {
  return (
    <Button
      className={cn(
        'py-[1.4rem] px-6 text-sm font-[500] rounded-full shadow-none',
        inverse
          ? 'bg-transparent text-[#473552] border border-[#473552] hover:bg-transparent'
          : 'bg-[#7209B7] text-white hover:bg-[#8a4ab5]',
        className
      )}
      {...props}
    >
      <div className="flex gap-2">
        {children}
        {withArrow && (
          <ButtonArrowIcon
            className={'mt-1'}
            primaryColor={!inverse ? 'white' : '#473552'}
          />
        )}
      </div>
    </Button>
  );
}
