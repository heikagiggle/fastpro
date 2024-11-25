import { DefaultModal } from '../../../../../components/modal/DefaultModal';
import { useState } from 'react';
import { ButtonComponent } from '../../../../../components/button';
import ApplyForm from './ApplyForm';

const ApplyNowModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <DefaultModal
      heading="Apply now"
      trigger={
        <ButtonComponent className="rounded-lg py-1">Apply Now</ButtonComponent>
      }
      open={open}
      onOpenChange={setOpen}
    >
      <div>
        <ApplyForm setModalOpen={setOpen}  />
      </div>
    </DefaultModal>
  );
};

export default ApplyNowModal;
