'use client';
import { useRouter } from 'next/navigation';
import { DefaultModal } from '../../../../../../components/modal/DefaultModal';
import { useState } from 'react';
import { SendModalIcon } from '../../../../../../vendor/components/icons/send-modal';

const SendModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleAccept = () => {
    setOpen(false);
    router.back();
  };

  return (
    <DefaultModal
      heading=""
      trigger={
        <button className="py-1 px-3 rounded-xl bg-[#7209B7] w-1/5">
          Send
        </button>
      }
      open={open}
      onOpenChange={setOpen}
    >
      <div className="my-2 flex flex-col justify-center text-center">
        <div className="flex flex-col justify-center items-center gap-y-3">
          <SendModalIcon />
          <p>Invoice sent successfully</p>

          <button
            className="px-3 text-white bg-[#7209B7] py-2 border border-[#1018280D] rounded-lg w-full"
            onClick={handleAccept}
          >
            Done
          </button>
        </div>
      </div>
    </DefaultModal>
  );
};

export default SendModal;
