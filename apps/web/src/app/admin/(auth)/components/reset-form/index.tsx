'use client';
import { useRouter } from 'next/navigation';
import ResetEmail from './ResetEmail';
import ResetVerification from './ResetVerification';
import ResetPassword from './ResetPassword';

const ResetForm = ({ step }: { step?: string | boolean | string[] }) => {
  const { push } = useRouter();
  const currentStep = parseInt((step as string) ?? '0');

  const handleNextStep = () => {
    push(`?step=${currentStep + 1}`);
  };

  const handlePrevStep = () => {
    push(`?step=${currentStep - 1}`);
  };
  return (
    <div>
      {step === '1' && (
        <ResetEmail
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {step === '2' && (
        <ResetVerification
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
     
      {step === '3' && <ResetPassword />}
    </div>
  );
};

export default ResetForm;
