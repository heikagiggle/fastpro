'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Form } from '@app/components/lib/ui/form';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { ContainerProps } from '../../../../../../../utils/type';
import { DateField } from '../../../../../../components/date/date-field';
import { useRouter } from 'next/navigation';

const ScheduleRfpSchema = z.object({
  date: z.string(),
});

export type ScheduleRfpData = z.infer<typeof ScheduleRfpSchema>;

const ScheduleRfpForm = ({ onNextStep}: ContainerProps) => {
  const router = useRouter();
  const handler = useForm<ScheduleRfpData>({
    resolver: zodResolver(ScheduleRfpSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: ScheduleRfpData) => {
    console.log(data);
    onNextStep && onNextStep();
  };

  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-"
      >
        <DateField
          name={'deadline'}
          label={'Select Date'}
          placeholder={'yyyy/mm/dd'}
        />
        <div className="flex justify-between items-center gap-x-3 pt-4 px-0 mb-2">
          <button
            className="bg-transparent w-full px-3 py-1.5 rounded-lg border-[#e5e5e5]  border"
            onClick={() => router.back()}
          >
            Cancel
          </button>
          <SubmitButton className='w-full' onClick={onNextStep}>Submit</SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default ScheduleRfpForm;
