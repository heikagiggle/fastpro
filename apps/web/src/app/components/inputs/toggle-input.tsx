import { FieldValues, Path } from 'react-hook-form';
import { FormInputProps } from './types';
import { cn } from '@app/components/utils';

export function ToggleInput<T extends FieldValues, TD extends Path<T>>({
  name,
  label,
  className,
}: FormInputProps<T, TD>) {
  return (
    <label className={cn('flex gap-2 cursor-pointer items-center', className)}>
      <div
        className={'w-9 h-6 bg-gray-200 p-0.5 rounded-xl relative inline-block'}
      >
        <input name={name} type={'checkbox'} className={'hidden peer'} />
        <span
          className={cn(
            'rounded-[50%] w-5 h-5 bg-dark-100 ease-in duration-200 absolute left-[5%] bottom-1/2 translate-y-1/2',
            'peer-checked:left-[95%] peer-checked:-translate-x-full peer-checked:bg-primary-100'
          )}
        />
      </div>
      {label && <p>{label}</p>}
    </label>
  );
}
