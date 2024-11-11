import { Tab } from '@app/components/lib/widgets/Tab/tab';
import { TabMenu } from '@app/components/lib/widgets/Tab/tab-menu';
import { TabMenuItem } from '@app/components/lib/widgets/Tab/tab-menu-item';
import { TabBody } from '@app/components/lib/widgets/Tab/TabBody';

import { redirect } from 'next/navigation';
import { PageParams } from '../../../../utils/type';
import ServiceDetails from './service-details/ServiceDetails';
import Accepted from './accepted/Accepted';
import Requests from './requests/Requests';


const OpenRfpTabs = ({ searchParams }: PageParams) => {
    const tab = searchParams.tab as string;
    if (!tab) redirect('?tab=service_details');
  return (
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
  )
}

export default OpenRfpTabs
