import { PageParams } from '../../../utils/type';
import { Tab } from '@app/components/lib/widgets/Tab/tab';
import { TabMenu } from '@app/components/lib/widgets/Tab/tab-menu';
import { TabMenuItem } from '@app/components/lib/widgets/Tab/tab-menu-item';
import { TabBody } from '@app/components/lib/widgets/Tab/TabBody';
import { redirect } from 'next/navigation';
import Open from './open/page';
import Scheduled from './scheduled';
import RfpTabButtons from './RfpTabButtons';

const RfpManagement = ({ searchParams }: PageParams) => {
  const tab = searchParams.tab as string;
  if (!tab) redirect('?tab=open');

  return (
    <Tab className={'h-full'}>
      <div className="flex justify-between border-b border-[#E5E5E5] pb-6">
        <TabMenu>
          <TabMenuItem tag={'open'}>Open</TabMenuItem>
          <TabMenuItem tag={'scheduled'}>Scheduled</TabMenuItem>
        </TabMenu>
        <RfpTabButtons />
      </div>

      <TabBody tag={'open'} tab={tab} body={Open} />
      <TabBody tag={'scheduled'} tab={tab} body={Scheduled} />
    </Tab>
  );
};

export default RfpManagement;
