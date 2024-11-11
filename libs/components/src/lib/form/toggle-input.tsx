import { Control, FieldPathByValue, FieldValues } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel } from '../ui/form';
import { Switch } from '../../ui/switch';
import { cn } from "../../utils/cn"

type FormProps<
  TF extends FieldValues,
  TP extends FieldPathByValue<TF, boolean | undefined>
> = {
  control: Control<TF>;
  name: TP;
  className?: string;
  label?: string;
};

export function ToggleInput<
  TF extends FieldValues,
  TP extends FieldPathByValue<TF, boolean | undefined>
>(props: FormProps<TF, TP>) {
  return (
    <FormField
      control={props.control}
      name={props.name}
      render={({ field }) => (
        <FormItem
          className={cn('flex items-center space-x-2', props.className)}
        >
          <FormControl>
            <Switch
              id={field.name}
              aria-readonly
              checked={field.value}
              onChange={field.onChange}
            />
          </FormControl>
          {props.label && (
            <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
          )}
        </FormItem>
      )}
    />
  );
}
