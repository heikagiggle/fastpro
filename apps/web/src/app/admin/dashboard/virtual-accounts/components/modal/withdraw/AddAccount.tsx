'use client';
import { ContainerProps } from '../../../../../../utils/type';
import { Form } from '@app/components/lib/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { TextInput } from '@app/components/lib/form/text-input';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { SelectInput } from '@app/components/lib/form/select-input';
import { z } from 'zod';

const AddAccountSchema = z.object({
  bank: z.string(),
  account_number: z.string().min(1),
});

export type AddAccountData = z.infer<typeof AddAccountSchema>;

const AddAccount = ({ onNextStep }: ContainerProps) => {
  const router = useRouter();

  const handler = useForm<AddAccountData>({
    resolver: zodResolver(AddAccountSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: AddAccountData) => {
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
          <div className="flex flex-col gap-y-1 mt-2 mb-4">
            <p className="font-medium md:text-2xl text-xl">Change Bank</p>
            <p>
              Select bank to withdraw, verify bank details as we won&apos;t be
              held responsible for funds sent to a wrong account
            </p>
          </div>

          <div className="flex flex-col gap-y-2 ">
            <SelectInput
              name="bank"
              label="Select Bank"
              placeholder="Select"
              items={[
                {
                  label: 'First Bank',
                  value: 'first_bank',
                  keywords: ['first_bank'],
                },
                {
                  label: 'Key Stone Bank',
                  value: 'key_stone',
                  keywords: ['Key Stone Bank'],
                },
                {
                  label: 'Union Bank',
                  value: 'Union_Bank',
                  keywords: ['Union_Bank'],
                },
              ]}
            />

            <TextInput
              name={'account_number'}
              label={`Account Number`}
              placeholder={'Enter your account number'}
            />

            {/* <p>{acoount user name} </p> show user name after correct account number has been inputted */}
          </div>
        </div>

        <div className="flex gap-x-3 justify-between my-3 mt-auto">
          <button
            className="containerBorder border-[#1018280D] font-semibold px-6 py-2 text-sm rounded-lg cursor-pointer"
            onClick={() => router.back()}
          >
            Cancel
          </button>
          <SubmitButton className="px-6 py-2 text-sm " type="submit">
            Save
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default AddAccount;
