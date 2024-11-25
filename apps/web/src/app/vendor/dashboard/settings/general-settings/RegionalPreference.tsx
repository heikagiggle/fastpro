'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SelectInput } from '@app/components/lib/form/select-input';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import LanguageAndTimezoneSelector from '../components/LanguageandTimezone';
import { InfoIcon } from '../../../components/icons/i';

const RegionalSchema = z.object({
  language: z.string(),
  date: z.string().optional(),
  time: z.string().optional(),
  timezone: z.string(),
});

export type RegionalData = z.infer<typeof RegionalSchema>;
const RegionalPreference = () => {
  const handler = useForm<RegionalData>({
    resolver: zodResolver(RegionalSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: RegionalData) => {
    console.log(data);
  };

  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[22rem]"
      >
        <div className="flex flex-col">
          <h2 className="text-[#0E121B] lg:text-base font-medium">
            Regional Preferences
          </h2>
          <p className="text-[#525866] text-sm py-1">
            Select your preferences for your region.
          </p>
        </div>

        <SelectInput
          name={'language'}
          label={'Language*'}
          placeholder={'Select Language'}
          items={[
            {
              label: '1 - 5',
              value: 'SIZE_1_5',
              keywords: ['one', '1 - 5', 'five'],
            },
            {
              label: '6 - 11',
              value: 'SIZE_6_11',
              keywords: ['six', '6 - 11', 'eleven'],
            },
          ]}
        />
        <LanguageAndTimezoneSelector />

        <div>
          <div className="flex gap-x-1 items-center">
            <label className="text-sm font-medium">
              Time Format <span className="text-[#666666]">(Optional)</span>
            </label>
            <InfoIcon />
          </div>

          <SelectInput
            name={'time'}
            label={''}
            placeholder={'Select time'}
            items={[
              {
                label: '24 hours',
                value: '24_hours',
                keywords: ['24 hours'],
              },
              {
                label: '12 hours',
                value: '12_hours',
                keywords: ['12 hours'],
              },
            ]}
          />
        </div>

        <div>
          <div className="flex gap-x-1 items-center">
            <label className="text-sm ">
              Date Format
              <span className="text-[#666666] font-medium">(Optional)</span>
            </label>
            <InfoIcon />
          </div>

          <SelectInput
            name={'date'}
            label={''}
            placeholder={'Select date'}
            items={[
              {
                label: 'DD/MM/YYYY',
                value: 'dd/mm/yyyy',
                keywords: ['dd/mm/yyyy'],
              },
              {
                label: 'YYYY/MM/DD',
                value: 'yyyy/mm/dd',
                keywords: ['yyyy/mm/dd'],
              },
            ]}
          />
        </div>

        <div className="flex gap-x-3">
          <button className="py-1 px-4 rounded-lg border-2 border-[#e5e5e5] w-full">
            Discard
          </button>
          <SubmitButton
            className={'text-sm rounded-lg px-3 w-full'}
            type="submit"
          >
            Apply Changes
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default RegionalPreference;
