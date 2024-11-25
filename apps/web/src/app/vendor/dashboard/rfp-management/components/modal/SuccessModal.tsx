import { ButtonComponent } from '../../../../../components/button';
import { ApplySuccessIcon } from '../../../../components/icons/apply-success-icon';

interface Props {
  setModalOpen: (open: boolean) => void;
}

const SuccessModal = ({ setModalOpen }: Props) => {
  const handleBack = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col items-center gap-y-2 p-4 bg-white rounded-md">
        <div className="flex justify-center items-center bg-[#F6F5F5] w-20 h-20 rounded-full">
          <ApplySuccessIcon />
        </div>
        <h1 className="font-medium text-lg mt-4">
          Application Sent Successfully
        </h1>
        <p className="text-center text-gray-600">
          You have successfully applied for this RFP request
        </p>
        <ButtonComponent
          className="rounded-lg py-2 px-6 mt-4 w-1/2"
          onClick={handleBack}
        >
          Done
        </ButtonComponent>
      </div>
    </div>
  );
};

export default SuccessModal;
