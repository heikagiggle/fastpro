'use client';

import { ReactNode, useState } from 'react';
import { FieldValues, Path } from 'react-hook-form';

import { InputGroup } from './input-group';
import { FormInputProps } from './types';
import { EyeIcon } from '../icons/eye-icon';
import { EyeClosedIcon } from '../icons/eye-closed';

type PasswordInputProps<
  T extends FieldValues,
  TD extends Path<T>
> = FormInputProps<T, TD> & {
  icon?: ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PasswordInput<T extends FieldValues, TD extends Path<T>>({
  label,
  handler,
  title,
  error,
  icon,
  onChange,
  ...props
}: PasswordInputProps<T, TD>) {
  const [hidden, setHidden] = useState(true);

  return (
    <label className="">
      {label && <p className="mb-2 ml-1">{label}</p>}
      <InputGroup>
        {icon && <span>{icon}</span>}
        <input
          type={hidden ? 'password' : 'text'}
          className="w-full input"
          {...handler.register(title)}
          {...props}
          onChange={onChange}
        />
        <span
          className="w-6 cursor-pointer"
          onClick={() => setHidden((prev) => !prev)}
        >
          {hidden ? <EyeIcon /> : <EyeClosedIcon />}
        </span>
      </InputGroup>
      {(error || handler.formState.errors[title]?.message) && (
        <small className="text-red-500 px-4 mt-2 duration-100 ease-in">
          {error ?? (handler.formState.errors[title]?.message as ReactNode)}
        </small>
      )}
    </label>
  );
}
