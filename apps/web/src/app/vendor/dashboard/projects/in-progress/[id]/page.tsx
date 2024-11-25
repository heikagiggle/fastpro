'use client';
import { CalendarIcon } from '../../../../components/icons/calendar';
import { VisibilityIcon } from '../../../../components/icons/visibility';
import { useParams} from 'next/navigation';
import ServiceDetails from '../service-details/ServiceDetails';
import { useState } from 'react';
import LeaveReview from '../../completed/components/modal/LeaveReview';

const OpenRfpbyId = () => {
  const { id } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);

  const handleCompleted = () => {
    setIsCompleted(true);
  };

  return (
    <div>
      <div className="border-b border-[#E5E5E5] mb-1">
        <div className="flex justify-between items-center  p-5">
          <div className="flex gap-x-2 items-center text-sm ">
            <p className="font-semibold text-lg text-[#7209B7]capitalize">
              Seeking Legal Representation
            </p>
          </div>

          <div
            className={
              isCompleted
                ? 'flex flex-col items-start gap-1 order-2'
                : 'flex gap-x-3 items-center'
            }
          >
            {isCompleted ? (
              <LeaveReview />
            ) : (
              <button
                className="cursor-pointer bg-[#7209B7] text-white shadow-sm rounded-md px-3 py-2"
                onClick={handleCompleted}
              >
                Completed
              </button>
            )}
            <p className="text-[#202020]">14th June, 2024</p>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F7F7] px-6 py-2 rounded-lg">
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

      <ServiceDetails />

      {/* <Tab className={'h-full mt-6'}>
        <TabMenu className={'px-0 gap-0 mx-0'}>
          <TabMenuItem tag={'service_details'}>Service Details</TabMenuItem>
          <TabMenuItem tag={'vendor'}>Vendor</TabMenuItem>
        </TabMenu>

        <TabBody tag={'service_details'} tab={tab} body={ServiceDetails} />
        <TabBody tag={'vendor'} tab={tab} body={VendorInfo} />
      </Tab> */}
    </div>
  );
};

export default OpenRfpbyId;
