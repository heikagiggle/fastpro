import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { IconProps } from '../icons/types';

interface SelectionOption {
  label: string;
  description?: string;
  value: string;
  icon: FC<IconProps>; 
}

interface SelectionProps {
  options: SelectionOption[];
  label: string;
  name: string;
}

export const SelectionComponent = ({
  options,
  label,
  name,
}: SelectionProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="my-1">
          <label className="block text-left font-semibold mb-2">{label}</label>
          <div className="space-y-3">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => field.onChange(option.value)}
                className={`flex items-center justify-between w-full text-left p-3 border-2 rounded-xl ${
                  field.value === option.value
                    ? 'border-[#7209B7] text-[#000]'
                    : 'border-[#2020204D] text-[#666666]'
                }`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full border border-[#E5E5E5]`}
                  >
                    <option.icon />
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">{option.label}</div>
                    {option.description && (
                      <div className="text-xs text-[#666666]">
                        {option.description}
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    field.value === option.value
                      ? 'bg-[#7209B7] border-[#7209B7]'
                      : 'bg-white border-[#E5E5E5]'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    />
  );
};
