import { DefaultModal } from '../../../../../../components/modal/DefaultModal';
import { useState } from 'react';
import ScheduleRfpForm from './ScheduleRfpForm';
import SuccessfulRfp from './SuccessfulRfp';

const ScheduleModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <DefaultModal
      heading={'Schedule RFP'}
      description={''}
      trigger={
        <p className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
          Schedule for Later
        </p>
      }
      open={open}
      onOpenChange={setOpen}
    >
      {currentStep === 1 && <ScheduleRfpForm onNextStep={handleNextStep} onPrevStep={handlePrevStep} /> }
      {currentStep === 2 && <SuccessfulRfp />}
    </DefaultModal>
  );
};

export default ScheduleModal;
