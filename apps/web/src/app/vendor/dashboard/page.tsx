import React from 'react';
import DashboardCardStats from './components/card/DashboardCard';
import { CategoryChart } from './components/charts/CategoryChart';
import { Card } from '@app/components/lib/ui/card';
import NewRfp from './components/new-rfps/NewRfp';

const Dashboard = () => {
  return (
    <div>
      <DashboardCardStats />
      <CategoryChart />
      <Card className={'w-full flex flex-col mt-6 p-4'}>
        <div className="flex justify-between items-center gap-x-2 py-4 border-b border-[#EAECF0] pb-3 mb-4">
          <h3 className="text-sm text-[#666666] font-medium">New RFPs</h3>
          <button className="border shadow-sm border-[#EAECF0] px-3 py-1 rounded-md">
            See all
          </button>
        </div>
        <NewRfp />
      </Card>
    </div>
  );
};

export default Dashboard;
