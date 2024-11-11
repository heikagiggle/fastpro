'use client';
import { TopupIcon } from '../../../../../components/icons/topup';
import { DefaultModal } from '../../../../../components/modal/DefaultModal';
import { useState } from 'react';
import { ButtonComponent } from '../../../../../../components/button';
import { useRouter } from 'next/navigation';
import { CopyIcon } from '../../../../../components/icons/copy';
import toast from 'react-hot-toast';

const TopupModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const accountNumber = '123456789';

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(accountNumber)
      .then(() => {
        toast.success('Account number copied to clipboard!');
      })
      .catch((error) => {
        toast.error('Failed to copy account number');
        console.error('Error copying to clipboard: ', error);
      });
  };

  const handleContinue = () => {
    setOpen(false); // Close the modal
    router.push('/admin/dashboard/virtual-accounts'); // Navigate after closing
  };

  return (
    <DefaultModal
      heading="Top Up Account"
      trigger={
        <button className="flex gap-x-2 items-center px-2 py-2 border-2 border-[#e5e5e5] rounded-md">
          <TopupIcon />
          <p> Top Up</p>
        </button>
      }
      open={open}
      onOpenChange={setOpen}
    >
      <div className="flex flex-col h-[430px]">
        <div className="flex flex-col flex-grow gap-y-2">
          <p>
            Transfer into the account number listed below to top - up your
            account{' '}
          </p>
          <div className="bg-[#E5E5E5] h-[14rem] rounded-lg flex flex-col gap-y-2 p-4">
            <div className="flex flex-col gap-y-2">
              <p className="text-sm">Bank Name</p>
              <p className="text-lg">United bank for Africa</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-sm">Account Name</p>
              <p className="text-lg">Matthew Ashimolowo</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <p className="text-sm">Account number</p>
              <div className="flex justify-between">
                <p className="text-lg">{accountNumber}</p>
                <button onClick={copyToClipboard}>
                  <CopyIcon />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-x-3 justify-between my-3 mt-auto">
          <button
            className="containerBorder border-[#1018280D] font-semibold px-6 py-2 text-sm rounded-lg cursor-pointer"
            onClick={() => router.back()}
          >
            Cancel
          </button>
          <ButtonComponent className="rounded-lg" onClick={handleContinue}>Continue</ButtonComponent>
        </div>
      </div>
    </DefaultModal>
  );
};

export default TopupModal;
