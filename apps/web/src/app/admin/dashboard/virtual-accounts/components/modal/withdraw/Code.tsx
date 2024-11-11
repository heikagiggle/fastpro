'use client';
import { ContainerProps } from '../../../../../../utils/type';
import { Form } from '@app/components/lib/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { TextInput } from '@app/components/lib/form/text-input';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { z } from 'zod';

const CodeSchema = z.object({
  code: z.string(),
});

export type CodeData = z.infer<typeof CodeSchema>;

const Code = ({ onNextStep }: ContainerProps) => {
  const router = useRouter();

  const handler = useForm<CodeData>({
    resolver: zodResolver(CodeSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: CodeData) => {
    console.log(data);
    onNextStep && onNextStep();
  };
  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col h-[430px]"
      >
        <div className="flex flex-col flex-grow">
          <div className='flex flex-col gap-y-1 mt-2 mb-4'>
            <p>We’ve sent a verification code to</p>
            <p>Bru********16@gmail.com</p>
            <p>Please, enter the code here to verify.</p>
          </div>
          <TextInput
            name={'code'}
            label={`Code`}
            placeholder={'Enter'}
          />

          <p className='text-[#7209B7] text-xs text-right cursor-pointer py-1'>Resend</p>
        </div>

        <div className="flex gap-x-3 justify-between my-3 mt-auto">
          <button
            className="containerBorder border-[#1018280D] font-semibold px-6 py-2 text-sm rounded-lg cursor-pointer"
            onClick={() => router.back()}
          >
            Cancel
          </button>
          <SubmitButton className="px-6 py-2 text-sm " type="submit">
            Confirm
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default Code;
