'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import WithdrawAmount from './WithdrawAmount';
import Code from './Code';
import Success from './Success';

interface Props {
  setModalOpen: (open: boolean) => void;
}

const WithdrawForm = ({ setModalOpen }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const step = searchParams.get('step') ?? '1';
  const currentStep = parseInt(step);

  const handleNextStep = () => {
    router.push(`?step=${currentStep + 1}`);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      router.push(`?step=${currentStep - 1}`);
    }
  };

  return (
    <div>
      {step === '1' && (
        <WithdrawAmount
          onNextStep={handleNextStep}
          onPrevStep={handlePrevStep}
        />
      )}
      {step === '2' && (
        <Code onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
      )}
      {step === '3' && <Success setModalOpen={setModalOpen} />}
    </div>
  );
};

export default WithdrawForm;
