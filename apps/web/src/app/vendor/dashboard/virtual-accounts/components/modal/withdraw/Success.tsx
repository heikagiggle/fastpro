import { ButtonComponent } from '../../../../../../components/button';
import { SuccessArrowIcon } from '../../../../../components/icons/sucees-rfp';
import React from 'react';

interface Props {
  setModalOpen: (open: boolean) => void;
}

const Success = ({ setModalOpen }: Props) => {

  const handleBack = () => {
    setModalOpen(false); 
  };
  return (
    <div className="flex flex-col justify-center gap-y-3 items-center text-center">
      <div className="flex flex-col justify-center gap-y-3 items-center text-center w-[300px]">
        <SuccessArrowIcon />
        <h2 className="font-medium md:text-2xl text-xl">
          Withdrawal Successful
        </h2>
        <p className="text-[#555555] sm:text-base text-sm">
          NGN 36,000 has been sent to Matthew Ashimolowo
        </p>
        <ButtonComponent className="w-full rounded-lg" onClick={handleBack}>
          Back
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Success;
