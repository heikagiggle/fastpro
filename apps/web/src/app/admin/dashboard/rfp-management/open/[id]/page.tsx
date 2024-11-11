'use client';
import { CalendarIcon } from '../../../../components/icons/calendar';
import { VisibilityIcon } from '../../../../components/icons/visibility';
import { useParams, useSearchParams, redirect } from 'next/navigation';
import { Tab } from '@app/components/lib/widgets/Tab/tab';
import { TabMenu } from '@app/components/lib/widgets/Tab/tab-menu';
import { TabMenuItem } from '@app/components/lib/widgets/Tab/tab-menu-item';
import { TabBody } from '@app/components/lib/widgets/Tab/TabBody';
import ServiceDetails from '../service-details/ServiceDetails';
import Requests from '../requests/Requests';
import Accepted from '../accepted/Accepted';

const OpenRfpbyId = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const company = searchParams.get('company');
  const deadline = searchParams.get('deadline');

  const tab = searchParams.get('tab') || 'service_details';
  if (!tab) redirect('?tab=service_details');

  return (
    <div>
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

      <Tab className={'h-full mt-6'}>
        <TabMenu className={'px-0 gap-0 mx-0'}>
          <TabMenuItem tag={'service_details'}>Service Details</TabMenuItem>
          <TabMenuItem tag={'requests'}>Requests</TabMenuItem>
          <TabMenuItem tag={'accepted'}>Accepted</TabMenuItem>
        </TabMenu>

        <TabBody tag={'service_details'} tab={tab} body={ServiceDetails} />
        <TabBody tag={'requests'} tab={tab} body={Requests} />
        <TabBody tag={'accepted'} tab={tab} body={Accepted} />
      </Tab>
    </div>
  );
};

export default OpenRfpbyId;
