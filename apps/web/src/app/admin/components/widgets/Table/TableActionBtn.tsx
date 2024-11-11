import { ReactNode } from 'react';

import { cn } from '@app/components/utils/cn';

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export function TableActionBtn({ children, className, onClick }: Props) {
  return (
    <button
      className={cn(
        'text-xs rounded-3xl py-1 px-3 bg-light-300 cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
