import { PageParams } from '../../../utils/type';
import { Tab } from '@app/components/lib/widgets/Tab/tab';
import { TabMenu } from '@app/components/lib/widgets/Tab/tab-menu';
import { TabMenuItem } from '@app/components/lib/widgets/Tab/tab-menu-item';
import { TabBody } from '@app/components/lib/widgets/Tab/TabBody';
import { redirect } from 'next/navigation';

import AccountReceivableButtons from './AccountReceivableButtons';
import Open from './open/Open';
import Invoices from './invoices/Invoices';

const AccountReceivable = ({ searchParams }: PageParams) => {
  const tab = searchParams.tab as string;
  if (!tab) redirect('?tab=open');

  return (
    <Tab className={'h-full'}>
      <div className="flex justify-between border-b border-[#E5E5E5] pb-6">
        <TabMenu className={'px-0 gap-0 mx-0 pt-2'}>
          <TabMenuItem tag={'open'}>Open</TabMenuItem>
          <TabMenuItem tag={'invoices'}>Invoices</TabMenuItem>
        </TabMenu>
        <AccountReceivableButtons />
      </div>

      <TabBody tag={'open'} tab={tab} body={Open} />
      <TabBody tag={'invoices'} tab={tab} body={Invoices} />
    </Tab>
  );
};

export default AccountReceivable;
