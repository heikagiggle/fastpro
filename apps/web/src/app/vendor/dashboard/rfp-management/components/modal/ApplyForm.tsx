'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import SuccessModal from './SuccessModal';
import ApplyNowForm from './ApplyNowForm';

interface Props {
    setModalOpen: (open: boolean) => void;
  }
const ApplyForm = ({ setModalOpen }: Props) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get('step') ?? '1';
  const currentStep = parseInt(step);

  const handleNextStep = () => {
    push(`?step=${currentStep + 1}`);
  };

  const handlePrevStep = () => {
    push(`?step=${currentStep - 1}`);
  };
  return (
    <>
      {step === '1' && (
        <ApplyNowForm onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
      )}
      {step === '2' && <SuccessModal setModalOpen={setModalOpen} />}
    </>
  );
};

export default ApplyForm;
