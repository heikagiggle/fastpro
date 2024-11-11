'use client';
import { DefaultModal } from '../../../../../components/modal/DefaultModal';
import { WithdrawIcon } from '../../../../../components/icons/withdraw';
import WithdrawForm from './WithdrawForm';
import { useState } from 'react';

const WithdrawModal = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DefaultModal
      heading="Withdraw"
      trigger={
        <button className="flex gap-x-2 items-center px-2 py-2 border-2 border-[#e5e5e5] rounded-md">
          <WithdrawIcon />
          <p> Withdraw</p>
        </button>
      }
      open={open}
      onOpenChange={setOpen}
    >
      <div>
        <WithdrawForm setModalOpen={setOpen} />
      </div>
    </DefaultModal>
  );
};

export default WithdrawModal;
