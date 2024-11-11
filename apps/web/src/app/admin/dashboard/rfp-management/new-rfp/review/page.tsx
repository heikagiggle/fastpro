'use client';
import { useRouter } from 'next/navigation';
import { CalendarIcon } from '../../../../components/icons/calendar';
import { VisibilityIcon } from '../../../../components/icons/visibility';
import Image from 'next/image';
import { BackArrowIcon } from '../../../../components/icons/back-arrow';
import { useState } from 'react';
import ScheduleModal from '../components/modal/schedule-rfp/ScheduleModal';

const ReviewRfp = () => {
  const router = useRouter();
  const [publishDropdown, setPublishDropdown] = useState(false);

  const toggleDropdown = () => setPublishDropdown((prev) => !prev);

  const handlePublishNow = () => {
    setPublishDropdown(false);
  };
  const handleScheduleLater = () => {
    setPublishDropdown(false);
  };

  return (
    <div>
      <div className="border-b border-[#E5E5E5] pb-3">
        <div className="flex justify-between itemscenter">
          <div className="flex gap-x-2 items-center text-sm ">
            <div className={'cursor-pointer'} onClick={() => router.back()}>
              <BackArrowIcon />
            </div>

            <p className="font-semibold text-lg text-[#7209B7]capitalize">
              Preview
            </p>
          </div>

          <div className="flex gap-x-3">
            <button className=" cursor-pointer text-sm items-center bg-transparent border border-[#7209B7] shadow-sm rounded-md px-8 py-1">
              Edit
            </button>
            <button
              className="flex text-sm items-center cursor-pointer bg-[#7209B7] text-white shadow-sm rounded-md px-3 py-1"
              onClick={toggleDropdown}
            >
              Publish <span className="ml-1 text-[8px]">&#x25BC;</span>
            </button>

            {publishDropdown && (
              <div className="absolute right-[2rem] mt-10 w-48 bg-white text-[#333333] shadow-md rounded-md border py-2 border-gray-300 z-10">
                <p
                  className="px-4 py-2 hover:bg-gray-50 border-b border-[#E5E5E5] cursor-pointer"
                  onClick={handlePublishNow}
                >
                  Publish Now
                </p>
                <ScheduleModal />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-[#F7F7F7] px-6 rounded-lg mt-5">
        <div className="flex flex-col gap-y-1">
          <div className="flex justify-between py-2">
            <p className="text-xs font-medium uppercase">Company Info</p>
          </div>

          <div className="flex justify-between ">
            <div className="w-[695px]">
              <h1 className=" font-medium text-2xl">Synergy Plc</h1>
              <p className="py-2 text-base">
                Synergy Plc is a company formed in Lorem ipsum dolor sit amet
                consectetur. Vel adipiscing in arcu facilisis imperdiet tellus.
                Massa tellus a elit sagittis.{' '}
              </p>
            </div>

            <div className="flex flex-col text-xs font-semibold gap-y-3">
              <div className="flex gap-x-2">
                <CalendarIcon />
                <div>
                  <p>Proposed deadline</p>
                  <p className="font-normal">1st July 2024</p>
                </div>
              </div>

              <div className="flex gap-x-2">
                <VisibilityIcon />
                <div>
                  <p>Visibility</p>
                  <p className="font-normal">Everyone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-[rgba(26,26,26,0.5)] rounded-2xl mt-3 p-5">
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-x-2 items-center text-sm">
            <p className="text-[#7209B7]">RT123456</p>
            <p className="text-[#666666]">21st June 2024</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <p className="text-base">Legal Services</p>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className=" font-medium text-xl  border-b border-[#E5E5E5] pb-3 m">
            Seeking legal representation for immigration matters
          </h1>

          <div className="border border-[#E5E5E5] rounded-xl mt-3 gap-2 p-3">
            <p className="text-[#666666] text-xs py-1 uppercase">Info</p>
            <p className="py-1">
              Lorem ipsum dolor sit amet consectetur. Vel adipiscing in arcu
              facilisis imperdiet tellus. Massa tellus a elit sagittis. Mi
              feugiat porttitor sit vestibulum libero maecenas donec. Eget non
              blandit risus sagittis varius pellentesque dictumst ornare.
              Aliquam scelerisque odio mattis maecenas eget tortor lacus
              ultrices est. Sit viverra aenean nullam ante eros. Id non leo
              semper urna amet mi arcu.
            </p>

            <div className="flex justify-between items-center my-5">
              <div>
                <p className="text-xs text-[#666666]">Budget</p>
                <p>N150,000 - N300,000</p>
              </div>
              <div>
                <p className="text-xs text-[#666666]">Requirement</p>
                <p>Intermediate</p>
              </div>
              <div>
                <p className="text-xs text-[#666666]">
                  Project Start - End date
                </p>
                <p>1st July 2024 - 1st August 2024</p>
              </div>
            </div>
          </div>

          <div className="border border-[#E5E5E5] rounded-xl mt-3 gap-2 p-3">
            <p className="text-[#666666] text-xs py-1 uppercase">
              Specifications
            </p>
            <p className="py-1">Requirement 1</p>
            <p className="py-1">Requirement 2</p>
            <p className="py-1">Requirement 3</p>
            <p className="py-1">Requirement 4</p>
          </div>

          <div className="border border-[#E5E5E5] rounded-xl mt-3 gap-2 p-3">
            <p className="text-[#666666] text-xs py-1 uppercase">
              Terms & Conditions
            </p>
            <p className="py-1 w-[660px]">
              Lorem ipsum dolor sit amet consectetur. Vel adipiscing in arcu
              facilisis imperdiet tellus. Massa tellus a elit sagittis.{' '}
            </p>
          </div>

          <div className="border border-[#E5E5E5] rounded-xl mt-3 gap-2 p-3">
            <p className="text-[#666666] text-xs py-1 uppercase">
              Additional attachments
            </p>
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
    </div>
  );
};

export default ReviewRfp;