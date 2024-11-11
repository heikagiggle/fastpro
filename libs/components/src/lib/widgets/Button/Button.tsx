'use client';

import { ComponentProps, type PropsWithChildren, ReactNode } from 'react';

import { cn } from "../../../utils/cn"
import { Button as UIButton } from '../../ui/button';

type Props = ComponentProps<typeof UIButton> & {
  loading?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
};

export function Button({
  children,
  className,
  loading,
  icon,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <UIButton className={cn('rounded-md px-12 py-3 bg-[#7209B7]', className)} {...props}>
      {children}
      {loading && (
        <span className={'w-5 ml-3'}>
          {/*<SpinnerIcon primaryColor={'#ffffff'} />*/}
          ...
        </span>
      )}
      {!loading && icon && icon}
    </UIButton>
  );
}
