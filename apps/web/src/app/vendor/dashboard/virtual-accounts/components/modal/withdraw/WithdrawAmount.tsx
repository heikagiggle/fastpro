'use client';
import { ContainerProps } from '../../../../../../utils/type';
import { Form } from '@app/components/lib/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { TextInput } from '@app/components/lib/form/text-input';
import { TopupIcon } from '../../../../../components/icons/topup';
import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { z } from 'zod';

const WithdrawSchema = z.object({
  amount: z.string().min(1),
});

export type WithdrawData = z.infer<typeof WithdrawSchema>;
const WithdrawAmount = ({ onNextStep, onAddAccount }: ContainerProps & { onAddAccount?: () => void }) => {
  const router = useRouter();

  const handler = useForm<WithdrawData>({
    resolver: zodResolver(WithdrawSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: WithdrawData) => {
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
          <p className="text-xs">Withdraw to:</p>
          <div className="border border-[#7209B7] text-[#7209B7] mt-3 mb-6 py-2 w-full text-center rounded-md">
            Uba Bank
          </div>

          <div className="border-b border-t my-4 border-[#0000004D]">
            <button
              type="button"
              className="flex gap-x-2 items-center my-6 px-2 py-2 border border-[#e5e5e5] text-[#7209B7] rounded-md"
              onClick={onAddAccount}  // Call the onAddAccount prop here
            >
              <TopupIcon primaryColor="#7209B7" />
              <p className="text-[#7209B7]"> Add Bank Account</p>
            </button>
          </div>

          <TextInput
            name={'amount'}
            label={`Withdraw Amount`}
            placeholder={'0.00 NGN'}
          />
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

export default WithdrawAmount;
