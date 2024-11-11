import { useFormContext } from 'react-hook-form';

import { cn } from "../../utils/cn"
import { FormInputProps } from './types';

export function CheckboxInput({
  label,
  name,
  className,
  ...props
}: FormInputProps) {
  const handler = useFormContext();

  return (
    <div className={'flex flex-col flex-nowrap w-fit gap-1'}>
      <div className="flex gap-2 items-center w-full">
        <input
          type="checkbox"
          className={cn('cursor-pointer w-4 h-4', className)}
          id={name}
          {...props}
          {...handler.register(name)}
        />
        {label && (
          <label
            htmlFor={name}
            className={cn('w-full text-xs font-medium cursor-pointer')}
          >
            {label}
          </label>
        )}
      </div>
    </div>
  );
}
