import { ComponentProps, PropsWithChildren, ReactNode } from 'react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@app/components/lib/ui/dialog';

type Props = ComponentProps<typeof Dialog> & {
  heading: string;
  description?: string;
  trigger?: ReactNode;
};

export function DefaultModal({
  heading,
  description,
  children,
  trigger,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <Dialog {...props}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-lg max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
