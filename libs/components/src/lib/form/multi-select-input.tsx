'use client';

import { CaretSortIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { Key, useMemo, useState } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { cn } from '../../util/cn';
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
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Separator } from '../ui/separator';
import { InputWrapper } from './input-wrapper';
import { SelectItem } from './types';

type FormProps<T> = {
  name: string;
  className?: string;
  label?: string;
  placeholder?: string;
  items: Array<SelectItem<T>>;
  contentHeight?: string;
};

export function MultiSelectInput<T>(props: FormProps<T>) {
  const [open, setOpen] = useState(false);

  const form = useFormContext<{
    [key: string]: { id?: string; key: number; value: T }[];
  }>();

  const { fields, append, remove } = useFieldArray({
    control: form?.control,
    name: props.name,
  });

  return (
    <FormField
      control={form?.control}
      name={props.name}
      render={() => (
        <FormItem
          className={cn('flex flex-col space-y-2 w-full', props.className)}
        >
          {props.label && <FormLabel>{props.label}</FormLabel>}
          <InputWrapper
            className={cn(
              'justify-between',
              !fields.length && 'text-muted-foreground'
            )}
            role={'combobox'}
            focus={open}
          >
            <Popover open={open} onOpenChange={setOpen} modal={true}>
              <PopoverTrigger asChild>
                <div
                  className={'h-full w-full flex items-center cursor-pointer'}
                >
                  <ScrollArea className={'w-full white'}>
                    <FormControl>
                      <div className={'flex w-max space-x-2.5 py-3 px-5'}>
                        {fields.length
                          ? fields.map((field: { id: string }, index) => (
                              <div
                                key={field.id}
                                className={'flex items-center gap-1 group'}
                              >
                                <CrossCircledIcon
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    remove(index);
                                  }}
                                  fontWeight={10}
                                />
                                {props.items[index]?.label}
                              </div>
                            ))
                          : props.placeholder}
                      </div>
                    </FormControl>
                    <ScrollBar orientation={'horizontal'} />
                  </ScrollArea>
                  <div className={'flex h-5'}>
                    <Separator orientation={'vertical'} className={'h-full'} />
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50 mr-3" />
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandInput placeholder={'Enter search'} />
                  <CommandEmpty>Not found ..</CommandEmpty>
                  <CommandGroup>
                    <CommandList style={{ maxHeight: props.contentHeight }}>
                      {props.items?.map((item, index) =>
                        fields.find((field) => field.key === index) ? null : (
                          <CommandItem
                            value={item.keywords.join(', ')}
                            key={index}
                            onSelect={() =>
                              append({ key: index, value: item.value })
                            }
                          >
                            {item?.label}
                          </CommandItem>
                        )
                      )}
                    </CommandList>
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </InputWrapper>
          <FormMessage className={'text-xs ml-auto'} />
        </FormItem>
      )}
    />
  );
}
