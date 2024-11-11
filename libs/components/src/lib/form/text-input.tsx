import { useFormContext } from 'react-hook-form';

import { cn } from "../../utils/cn"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input } from '../ui/input';
import { FormInputProps } from './types';

type Props = FormInputProps & {
  type?: 'text' | 'email' | 'number' | 'date';
  name?: string;
};

export function TextInput(props: Props) {
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
            <Input
              type={props.type ?? 'text'}
              id={props.name}
              placeholder={props.placeholder}
              className={'rounded-md'}
              {...field}
              disabled={props.disabled}
              readOnly={props.readOnly}
            />
          </FormControl>
          <FormMessage className={'text-xs ml-auto'} />
        </FormItem>
      )}
    />
  );
}
