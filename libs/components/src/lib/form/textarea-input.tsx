import { useFormContext } from 'react-hook-form';

import { cn } from "../../utils/cn"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Textarea } from '../ui/textarea';
import { FormInputProps } from './types';

export function TextAreaInput(props: FormInputProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form?.control}
      name={props.name}
      render={({ field }) => (
        <FormItem className={cn('flex flex-col space-y-2 w-full')}>
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <FormControl>
            <Textarea
              placeholder={props.placeholder}
              className={cn('resize-none', props.className)}
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
