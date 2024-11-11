'use client';
import { ButtonComponent } from '../../../../components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PasswordInput } from '../../../../components/inputs/password-input';
import { Locked } from '../../../../components/icons/locked';
import { InfoIcon } from '../../../components/icons/i';

const DeleteAccountSchema = z.object({
  confirmPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters long'),
});

export type DeleteAccountSchema = z.infer<typeof DeleteAccountSchema>;
const DeleteAccount = () => {
  const handler = useForm<DeleteAccountSchema>({
    resolver: zodResolver(DeleteAccountSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: DeleteAccountSchema) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handler.handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-[22rem]"
    >
      <div className="flex flex-col pb-2 border-b border-[#e5e5e5]">
        <h2 className="text-[#0E121B] lg:text-base font-medium">
          Delete Account
        </h2>
        <p className="text-[#525866] text-sm py-1">
          Manage the process of deleting account.
        </p>
      </div>

      <div className="flex gap-x-2 items-center bg-[#FFEBEC] p-3 rounded-lg">
        <InfoIcon primaryColor="#FB3748" />
        <p className="text-xs ">This action cannot be undone.</p>
      </div>

      <div className="flex flex-col gap-y-4 text-sm text-[#666666]">
        <p>
          All of your data, including your profile, posts, and personal
          information, will be permanently removed.
        </p>
        <p>
          By entering your password, you confirm that you understand and accept
          the consequences of deleting your account.
        </p>
      </div>

      <PasswordInput
        label={'Confirm Deletion*'}
        handler={handler}
        title={'confirmPassword'}
        placeholder={'• • • • • • • • • •'}
        icon={<Locked />}
      />

      <div className="flex gap-x-2 items-center p-3 rounded-lg">
        <InfoIcon primaryColor="#335CFF" />
        <p className="text-xs text-[#666666] ">
          Provide your password to proceed with account deletion.
        </p>
      </div>

      <div className="flex gap-x-3">
        <button className="py-1 px-4 rounded-lg border-2 border-[#e5e5e5] w-full">
          Discard
        </button>
        <ButtonComponent
          className={'text-sm bg-[#E94A3F] px-2 py-1 rounded-lg w-full'}
          type="submit"
        >
          Delete Account
        </ButtonComponent>
      </div>
    </form>
  );
};

export default DeleteAccount;
