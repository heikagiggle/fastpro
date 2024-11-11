'use client';
import { ContainerProps } from '../../../../utils/type';
import Link from 'next/link';
import { ButtonComponent } from '../../../../components/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import PinInput from 'react-pin-input';
import { BackTemplateButton } from '../../../../components/back-template-button';
import { VerificationIcon } from '../../../../components/icons/verification';

const VerificationSchema = z.object({
  otp: z.string().min(6, 'code must be at least 6 characters'),
});

export type VerificationData = z.infer<typeof VerificationSchema>;

const Verification = ({ onNextStep }: ContainerProps) => {
  const handler = useForm<VerificationData>({
    resolver: zodResolver(VerificationSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: VerificationData) => {
    console.log(data);
    onNextStep && onNextStep();
  };

  return (
    <div>
      <div>
        <BackTemplateButton text="Go Home" />
      </div>
      <div className="flex justify-center items-center">
        <VerificationIcon />
      </div>

      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="text-center items-center">
          <h2 className="text-[#0D0D0D] text-xl font-medium">
            Enter verification code
          </h2>
          <p className="text-dark-200 text-sm py-1">
            We’ve sent a code to sophia@synergyplc.com
          </p>
        </div>

        <div className="flex text-center items-center justify-center">
          <PinInput
            length={6}
            initialValue=""
            secret
            secretDelay={100}
            onChange={(value) => handler.setValue('otp', value)}
            type="numeric"
            inputMode="number"
            style={{ padding: '10px' }}
            inputStyle={{ borderColor: '#E5E5E5' }}
            inputFocusStyle={{ borderColor: '#7209B7' }}
            onComplete={(value) => handler.setValue('otp', value)}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </div>

        <ButtonComponent className={'text-sm py-2 rounded-lg'} type="submit">
          Continue
        </ButtonComponent>

        <div className="flex justify-center items-center py-1">
          <Link
            href="/"
            className="text-sm font-semibold text-center text-[#7209B7] underline"
          >
            Resend Code
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Verification;
