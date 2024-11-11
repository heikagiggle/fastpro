import { ReactNode } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import { FormInputProps } from './types';
import { cn } from '@app/components/utils';

export function CheckboxInput<T extends FieldValues, TD extends Path<T>>({
  label,
  error,
  handler,
  title,
  className,
  labelClass,
  type,
  ...props
}: FormInputProps<T, TD>) {
  return (
    <div className={'flex flex-col flex-nowrap w-fit gap-1'}>
      <div className="flex gap-2 items-center w-full">
        <input
          type="checkbox"
          className={cn('cursor-pointer bg-[#7209B7] w-4 h-4', className)}
          id={title}
          {...props}
          {...handler.register(title)}
        />
        {label && (
          <label
            htmlFor={title}
            className={cn(
              'w-full text-xs font-medium cursor-pointer',
              labelClass
            )}
          >
            {label}
          </label>
        )}
      </div>
      {(error || handler.formState.errors[title]?.message) && (
        <small className={'text-red-500 px-4 mt-2 duration-100 ease-in'}>
          {error ?? (handler.formState.errors[title]?.message as ReactNode)}
        </small>
      )}
    </div>
  );
}
