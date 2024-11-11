'use client';
import Link from 'next/link';
import { TextInput } from '../../../../components/inputs/text-input';
import { ButtonComponent } from '../../../../components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Envelope } from '../../../../components/icons/envelope';
import { Profile } from '../../../../components/icons/profile';
import { ContainerProps } from '../../../../utils/type';

const ResetEmailSchema = z.object({
  email: z.string(),
});

export type ResetEmailData = z.infer<typeof ResetEmailSchema>;

const ResetEmail = ({ onNextStep }: ContainerProps) => {
  const handler = useForm<ResetEmailData>({
    resolver: zodResolver(ResetEmailSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: ResetEmailData) => {
    console.log(data);
    onNextStep && onNextStep();
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <Profile />
      </div>

      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="text-center items-center">
          <h2 className="text-[#0D0D0D] sm:text-2xl text-lg font-medium">
            Reset password
          </h2>
          <p className="text-[#666666] sm:text-base text-sm py-1">
            Enter your email to reset your password
          </p>
        </div>

        <TextInput
          label={'Email Address*'}
          handler={handler}
          title={'email'}
          placeholder={'youremail@example.com'}
          icon={<Envelope />}
        />

        <ButtonComponent className={'text-sm py-2 rounded-lg'} type="submit">
          Reset Password
        </ButtonComponent>
      </form>
      <div className="text-[#666666] pt-4 text-center">
        <Link
          href="/vendor/login"
          className="cursor-pointer text-[#7209B7] font-medium underline"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default ResetEmail;
