'use client';
import { DefaultModal } from '../../../../../../components/modal/DefaultModal';
import { useState } from 'react';
import { Form } from '@app/components/lib/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { TextAreaInput } from '@app/components/lib/form/textarea-input';
import { useRouter } from 'next/navigation';

const DeletetSchema = z.object({
  comments: z.string().optional(),
});

export type DeletetData = z.infer<typeof DeletetSchema>;

const Decline = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const handler = useForm<DeletetData>({
    resolver: zodResolver(DeletetSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: DeletetData) => {
    console.log(data);
    setOpen(false);
  };

  return (
    <DefaultModal
      heading="Decline Invoice"
      trigger={
        <button className="py-2 px-3 rounded-xl bg-[#E94A3F] w-full">
          Decline
        </button>
      }
      open={open}
      onOpenChange={setOpen}
    >
      <Form {...handler}>
        <form onSubmit={handler.handleSubmit(onSubmit)} className="my-2">
          <p className="mb-3">Are you sure you want to accept this invoice</p>
          <TextAreaInput
            name={'comments'}
            label={'Give reason'}
            placeholder={''}
            className="h-[100px]"
          />

          <div className="flex gap-x-3 items-center mt-8">
            <button
              className="px-3 py-1.5 w-full border-2 border-[#1018280D] rounded-lg"
              onClick={() => router.back()}
            >
              No
            </button>
            <SubmitButton className="px-6 py-3 text-sm bg-[#E94A3F] hover:bg-[#dd6a62] w-full whitespace-nowrap">
              Decline
            </SubmitButton>
          </div>
        </form>
      </Form>
    </DefaultModal>
  );
};

export default Decline;
