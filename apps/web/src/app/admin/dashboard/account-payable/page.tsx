import { PageParams } from '../../../utils/type';
import { Tab } from '@app/components/lib/widgets/Tab/tab';
import { TabMenu } from '@app/components/lib/widgets/Tab/tab-menu';
import { TabMenuItem } from '@app/components/lib/widgets/Tab/tab-menu-item';
import { TabBody } from '@app/components/lib/widgets/Tab/TabBody';
import { redirect } from 'next/navigation';
import Pending from './pending/Pending';
import Approved from './approved/Approved';
import Denied from './denied/Denied';
import AccountPayableButtons from './AccountPayableButtons';

const AccountPayable = ({ searchParams }: PageParams) => {
  const tab = searchParams.tab as string;
  if (!tab) redirect('?tab=pending');

  return (
    <Tab className={'h-full'}>
      <div className="flex justify-between border-b border-[#E5E5E5] pb-6">
        <TabMenu className={'px-0 gap-0 mx-0 pt-2'}>
          <TabMenuItem tag={'pending'}>Pending</TabMenuItem>
          <TabMenuItem tag={'approved'}>Approved</TabMenuItem>
          <TabMenuItem tag={'denied'}>Denied</TabMenuItem>
        </TabMenu>
        <AccountPayableButtons />
      </div>

      <TabBody tag={'pending'} tab={tab} body={Pending} />
      <TabBody tag={'approved'} tab={tab} body={Approved} />
      <TabBody tag={'denied'} tab={tab} body={Denied} />
    </Tab>
  );
};

export default AccountPayable;
