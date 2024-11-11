import React from 'react';
import { Card } from '@app/components/lib/ui/card';
import { cn } from '@app/components/utils/cn';
import { BarChart } from '@app/components/lib/widgets/BarChart/BarChart';
import { CategoryChartIcon } from '../../../components/icons/categorychart';

type Props = {
  className?: string;
};

// Dummy data for testing
const dummyData = [
    { key: 'Logistics', value: 60000, color: '#47C2FF' },
    { key: 'Utilities', value: 40000, color: '#FFA500' },
    { key: 'Supplies', value: 30000, color: '#4B88F8' },
    { key: 'Admin', value: 20000, color: '#A855F7' },
    { key: 'Others', value: 10000, color: '#22C55E' },
  ];
  

  const CategoryChart = (props: Props) => {
    return (
      <Card className={cn('flex flex-col gap-5 w-full h-full mt-6', props.className)}>
        <div className="flex justify-between items-center gap-x-2 py-4 px-4 border-b border-[#EAECF0] pb-3 mb-4">
          <div className="flex gap-x-2 items-center">
            <CategoryChartIcon />
            <h3 className="text-base text-[#0D0D0D] font-medium">Top Categories</h3>
          </div>
          <button className="border shadow-sm border-[#EAECF0] px-3 py-1 rounded-md">
            This month
          </button>
        </div>
        <div className="w-full h-[270px] pr-8">
          <BarChart
            charts={[
              {
                data: dummyData,
                label: '',
                key: '',
              },
            ]}
          />
        </div>
        <p className="text-xs text-center text-[#667085] font-semibold"></p>
      </Card>
    );
  };
  

export default CategoryChart;
