'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import WithdrawAmount from './WithdrawAmount';
import Code from './Code';
import Success from './Success';
import AddAccount from './AddAccount';

interface Props {
  setModalOpen: (open: boolean) => void;
}

const WithdrawForm = ({ setModalOpen }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get('step') ?? '1';
  const currentStep = parseInt(step);

  // wants to add a bank account
  const [isAddingAccount, setIsAddingAccount] = useState(false);

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
      {!isAddingAccount ? (
        <>
          {step === '1' && (
            <WithdrawAmount
              onNextStep={handleNextStep}
              onAddAccount={() => {
                setIsAddingAccount(true);
                router.push('?step=1');
              }}
              onPrevStep={handlePrevStep}
            />
          )}
          {step === '2' && (
            <Code onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
          )}
          {step === '3' && <Success setModalOpen={setModalOpen} />}
        </>
      ) : (
        <>
          {step === '1' && (
            <AddAccount
              onNextStep={handleNextStep}
              onPrevStep={handlePrevStep}
            />
          )}
          {step === '2' && (
            <Code
              onNextStep={() => router.push('?step=3')}
              onPrevStep={handlePrevStep}
            />
          )}
          {step === '3' && (
            <WithdrawAmount
              onNextStep={handleNextStep}
              onPrevStep={handlePrevStep}
            />
          )}
          {step === '4' && <Success setModalOpen={setModalOpen} />}
        </>
      )}
    </div>
  );
};

export default WithdrawForm;
