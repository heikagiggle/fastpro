'use client';
import { useRouter } from 'next/navigation';
import { DefaultModal } from '../../../../../../components/modal/DefaultModal';
import { useState } from 'react';

const Accept = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleAccept = () => {
    setOpen(false);
    router.back();
  };

  return (
    <DefaultModal
      heading="Accept Invoice"
      trigger={
        <button className="py-2 px-3 rounded-xl bg-[#7209B7] w-full">
          Accept
        </button>
      }
      open={open}
      onOpenChange={setOpen}
    >
      <div className="my-2">
        <p>Are you sure you want to accept this invoice</p>
        <div className="flex gap-x-3 mt-8">
          <button
            className="px-3 py-2 w-full border-2 border-[#1018280D] rounded-lg"
            onClick={() => router.back()}
          >
            No
          </button>
          <button
            className="px-3 text-white bg-[#1FC16B] py-2 w-full border border-[#1018280D] rounded-lg"
            onClick={handleAccept}
          >
            Yes
          </button>
          
        </div>
      </div>
    </DefaultModal>
  );
};

export default Accept;
