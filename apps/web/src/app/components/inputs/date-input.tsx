'use client';

import { ReactNode, useState } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import { InputGroup } from './input-group';
import { FormInputProps } from './types';
import { cn } from '@app/components/utils';

export function DateInput<T extends FieldValues, TD extends Path<T>>({
  label,
  error,
  handler,
  title,
  className,
  labelClass,
  type,
  ...props
}: FormInputProps<T, TD>) {
  const [isDate, setIsDate] = useState(false);
  return (
    <div className={'flex w-full flex-col gap-1'}>
      {label && <p className={cn(labelClass)}>{label}</p>}
      <InputGroup className={className}>
        <input
          type={isDate ? 'date' : 'text'}
          onMouseDown={() => setIsDate(!isDate)}
          className={'w-full input'}
          {...props}
          {...handler.register(title)}
        />
      </InputGroup>
      {(error || handler.formState.errors[title]?.message) && (
        <small className={'text-red-500 px-4 mt-2 duration-100 ease-in'}>
          {error ?? (handler.formState.errors[title]?.message as ReactNode)}
        </small>
      )}
    </div>
  );
}
