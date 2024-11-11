import { SubmitButton } from '@app/components/lib/form/SubmitButton';
import { DefaultModal } from '../../../../../components/modal/DefaultModal';
import { useState } from 'react';
import VendorVisibilityForm from './VendorVisibilityForm';

const NewRfpModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DefaultModal
      heading={'New Requisition for Proposal'}
      description={''}
      trigger={
        <SubmitButton className="px-6 py-2 text-sm w-full">Save</SubmitButton>
      }
      open={open}
      onOpenChange={setOpen}
    >

      <VendorVisibilityForm />
    </DefaultModal>
  );
};

export default NewRfpModal;
