'use client';

import { CaretSortIcon } from '@radix-ui/react-icons';
import { Key, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from "../../utils/cn"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { InputWrapper } from './input-wrapper';
import { SelectItem } from './types';

type FormProps<T extends Key> = {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  items: Array<SelectItem<T>>;
  contentHeight?: string;
  multiple?: boolean; 
};

export function SelectMultipleInput<T extends Key>(props: FormProps<T>) {
  const form = useFormContext<{ [key: string]: T | T[] }>(); 
  const [open, setOpen] = useState(false);

  // Handle multi-select logic
  const handleSelect = (value: T) => {
    const currentValue = form?.getValues(props.name) || [];
    const newValue = Array.isArray(currentValue)
      ? currentValue.includes(value)
        ? currentValue.filter((v: T) => v !== value)
        : [...currentValue, value] 
      : [value];
    form?.setValue(props.name, newValue, {
      shouldValidate: true,
    });
    setOpen(false);
  };

  return (
    <FormField
      control={form?.control}
      name={props.name}
      render={({ field }) => (
        <FormItem
          className={cn('flex flex-col space-y-2 w-full', props.className)}
        >
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <Popover open={open} onOpenChange={setOpen} modal={true}>
            <PopoverTrigger>
              <FormControl>
                <InputWrapper
                  className={cn(
                    'justify-between py-3 px-5',
                    !field.value && 'text-muted-foreground'
                  )}
                  role={'combobox'}
                  focus={open}
                >
                  {Array.isArray(field.value) && field.value.length > 0
                    ? field.value
                        .map((val) => props.items.find((item) => item.value === val)?.label)
                        .join(', ')
                    : props.placeholder}
                  <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </InputWrapper>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent>
              <Command>
                <CommandInput placeholder={'Enter search'} />
                <CommandEmpty>Not found ..</CommandEmpty>
                <CommandGroup>
                  <CommandList style={{ maxHeight: props.contentHeight }}>
                    {props.items?.map((item) => (
                      <CommandItem
                        value={item.keywords.join(', ')}
                        key={item.value}
                        onSelect={() => handleSelect(item.value)}
                        className={cn(
                          'cursor-pointer',
                          Array.isArray(field.value) &&
                            field.value.includes(item.value) && 'bg-gray-100'
                        )}
                      >
                        {item?.label}
                      </CommandItem>
                    ))}
                  </CommandList>
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <FormMessage className={'text-xs ml-auto'} />
        </FormItem>
      )}
    />
  );
}
