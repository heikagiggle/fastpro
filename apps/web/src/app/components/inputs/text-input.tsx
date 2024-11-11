import { ReactNode } from 'react';
import { FieldValues, Path } from 'react-hook-form';
import { InputGroup } from './input-group';
import { FormInputProps } from './types';
import { cn } from '@app/components/utils';

type TextInputProps<T extends FieldValues, TD extends Path<T>> = FormInputProps<
  T,
  TD
> & {
  icon?: ReactNode; // Optional icon prop
};

export function TextInput<T extends FieldValues, TD extends Path<T>>({
  label,
  error,
  handler,
  title,
  icon,
  className,
  labelClass,
  type,
  ...props
}: TextInputProps<T, TD>) {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && <p className={cn(labelClass)}>{label}</p>}
      <InputGroup className={className}>
        {icon && <span>{icon}</span>}
        <input
          type={type ?? 'text'}
          className="w-full input"
          {...props}
          {...handler.register(title)}
        />
      </InputGroup>
      {(error || handler.formState.errors[title]?.message) && (
        <small className="text-red-500 px-4 mt-2 duration-100 ease-in">
          {error ?? (handler.formState.errors[title]?.message as ReactNode)}
        </small>
      )}
    </div>
  );
}
