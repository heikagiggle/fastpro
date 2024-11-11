import { cn } from '@app/components/utils';
import { ReactNode } from 'react';

interface Props {
  className?: string;
  heading: string;
  children: ReactNode;
}

export function Card({ className, heading, children }: Props) {
  return (
    <div
      className={cn(
        'shadow-md  bg-white rounded-none w-full xl:w-[37rem] lg:h-[47rem] px-3 py-2 flex flex-col',
        className
      )}
    >
      <div className="flex flex-col flex-grow">
        <div className="relative w-full h-[32.6rem] bg-[#FBFBFB]">
          {/* image  */}
        </div>

        <div className="py-2 px-2 my-2 ">
          <p className="text-3xl text-[#181818] font-bold">{heading}</p>
          <div className="mt-3 text-[#181818E5]">{children}</div>
        </div>
      </div>
    </div>
  );
}
