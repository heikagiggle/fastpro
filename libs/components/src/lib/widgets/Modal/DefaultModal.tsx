import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../ui/dialog';

type Props = ComponentProps<typeof Dialog> & {
  heading: string;
  description?: string;
  trigger?: ReactNode;
  wide?: boolean;
};

export function DefaultModal({
  heading,
  description,
  children,
  trigger,
  wide = false,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Dialog {...props}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-md max-h-[80vh] overflow-y-auto"  style={{ maxWidth: wide ? '60%' : '28rem' }}>
        <DialogHeader>
          <div className="bg-[#F9F9F9] mr-auto p-2 rounded-lg">
            {/*<FlagIcon />*/}
          </div>
          <DialogTitle>{heading}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
