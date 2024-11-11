import { PageParams } from '../../../utils/type';
import { Tab } from '@app/components/lib/widgets/Tab/tab';
import { TabMenu } from '@app/components/lib/widgets/Tab/tab-menu';
import { TabMenuItem } from '@app/components/lib/widgets/Tab/tab-menu-item';
import { TabBody } from '@app/components/lib/widgets/Tab/TabBody';
import { redirect } from 'next/navigation';

import InProgress from './in-progress/InProgress';
import Completed from './completed/Completed';
import ProjectTabButtons from './ProjectTabButtons';

const Projects = ({ searchParams }: PageParams) => {
  const tab = searchParams.tab as string;
  if (!tab) redirect('?tab=in-progress');

  return (
    <Tab className={'h-full'}>
      <div className="flex justify-between border-b border-[#E5E5E5] pb-6">
        <TabMenu className={'px-0 gap-0 mx-0 pt-2'}>
          <TabMenuItem tag={'in-progress'}>In Progress</TabMenuItem>
          <TabMenuItem tag={'completed'}>Completed</TabMenuItem>
        </TabMenu>
        <ProjectTabButtons />
      </div>

      <TabBody tag={'in-progress'} tab={tab} body={InProgress} />
      <TabBody tag={'completed'} tab={tab} body={Completed} />
    </Tab>
  );
};

export default Projects;
