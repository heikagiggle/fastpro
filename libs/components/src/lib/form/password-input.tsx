'use client';

import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { EyeOpenIcon, EyeClosedIcon } from '@radix-ui/react-icons';

import { InputWrapper } from './input-wrapper';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { cn } from "../../utils/cn"

type FormProps<TP extends string> = {
  name: TP;
  className?: string;
  label?: string;
  placeholder?: string;
};

export function PasswordInput<TP extends string>(props: FormProps<TP>) {
  const [hidden, setHidden] = useState(true);
  const form = useFormContext();

  return (
    <FormField
      control={form?.control}
      name={props.name}
      render={({ field }) => (
        <FormItem
          className={cn('flex flex-col space-y-2 w-full', props.className)}
        >
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <FormControl>
            <InputWrapper>
              <input
                id={props.name}
                type={hidden ? 'password' : 'text'}
                className={'w-full input py-3 px-5'}
                placeholder={props.placeholder}
                {...field}
              />
              <span
                className={'w-6 cursor-pointer mr-3'}
                onClick={() => setHidden((prev) => !prev)}
              >
                {hidden ? <EyeClosedIcon /> : <EyeOpenIcon />}
              </span>
            </InputWrapper>
          </FormControl>
          <FormMessage className={'text-xs ml-auto'} />
        </FormItem>
      )}
    />
  );
}
