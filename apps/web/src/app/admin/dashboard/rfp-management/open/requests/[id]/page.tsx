'use client';
import { VendorArrowIcon } from '../../../../../components/icons/vendor-back-arrow';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const VendorId = () => {
  const router = useRouter();

  return (
    <div className="border border-[rgba(26,26,26,0.5)] rounded-2xl mt-3">
      <div className="border-b border-[#E5E5E5] mb-1">
        <div className="flex justify-between items-center  p-5">
          <div className="flex gap-x-2 items-center text-sm ">
            <div className={'cursor-pointer'} onClick={() => router.back()}>
              <VendorArrowIcon />
            </div>

            <p className="font-semibold text-lg text-[#7209B7]capitalize">
              Vendor name
            </p>
          </div>

          <div className="flex gap-x-3">
            <button className=" cursor-pointer items-center bg-[#E94A3F] text-white shadow-sm rounded-md px-3 py-2">
              Reject
            </button>
            <button className=" cursor-pointer items-center bg-[#7209B7] text-white shadow-sm rounded-md px-3 py-2">
              Shortlists
            </button>
            <button className=" cursor-pointer items-center bg-[#1FC16B] text-white shadow-sm rounded-md px-3 py-2">
              Awards
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-5">
        <div className="border border-[#E5E5E5] rounded-xl mt-3 mb-4 gap-3 p-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#666666] text-xs py-1">Proposal Title</p>
            </div>
            <div>
              <p className="text-[#202020]">14th June, 2024</p>
            </div>
          </div>

          <p className="py-1 text-lg font-medium">Vendor Proposal Title</p>
        </div>

        <div className="bg-[#F7F7F7] px-6 py-2 rounded-xl">
          <div className="flex flex-col gap-y-1">
            <div className="flex justify-between py-2">
              <p className="text-xs font-medium uppercase">Vendor Info</p>
            </div>

            <div className="flex justify-between ">
              <div className="w-[695px]">
                <h1 className=" font-medium text-2xl">Vendor name</h1>
                <p className="py-2 text-base">
                  Synergy Plc is a company formed in Lorem ipsum dolor sit amet
                  consectetur. Vel adipiscing in arcu facilisis imperdiet
                  tellus. Massa tellus a elit sagittis.{' '}
                </p>
              </div>

              <div className="flex flex-col text-xs font-semibold gap-y-3">
                <div className="flex gap-x-2">
                  <div>
                    <p>Ratings</p>
                    <p className="font-normal">⭐⭐⭐⭐⭐</p>
                  </div>
                </div>

                <div className="flex gap-x-2">
                  <div>
                    <p>Jobs completed</p>
                    <p className="font-normal">35</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border border-[#E5E5E5] rounded-xl mt-3 gap-2 p-3">
          <p className="text-[#666666] text-xs py-1">Executive summary</p>
          <p className="py-1 ">
            Lorem ipsum dolor sit amet consectetur. Vel adipiscing in arcu
            facilisis imperdiet tellus. Massa tellus a elit sagittis. Mi feugiat
            porttitor sit vestibulum libero maecenas donec...
          </p>
        </div>

        <div className="border border-[#E5E5E5] rounded-xl mt-3 gap-2 p-3">
          <p className="text-[#666666] text-xs py-1">Proposal</p>
          <p className="py-1 w-[660px]">
            <Image
              src={
                'https://files.skillpaddy.com/public/image/pdf-1730223074859.png'
              }
              alt="pdf image"
              width={50}
              height={50}
            />
          </p>
        </div>

        <div className="border border-[#E5E5E5] rounded-xl my-3 gap-2 p-3">
          <p className="text-[#666666] text-xs py-1">Attachments</p>
          <p className="py-1 w-[660px]">
            <Image
              src={
                'https://files.skillpaddy.com/public/image/pdf-1730223074859.png'
              }
              alt="pdf image"
              width={50}
              height={50}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default VendorId;
