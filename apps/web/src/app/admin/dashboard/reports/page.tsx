import React from 'react';
import ReportCard from './components/card/ReportCards';
import CategoryChart from '../components/charts/CategoryChart';
import TotalPayouts from './components/chart/TotalPayouts';
import TopVendors from './components/top-vendors/TopVendors';
import { ArrowDown } from '../../../components/icons/arrow-down';

const Reports = () => {
  return (
    <div>
      <div className="flex justify-end">
        <button className="text-xs flex gap-x-2 items-center font-medium text-[#666666] rounded-lg px-2 py-2 border-2 border-[#e5e5e5] cursor-pointer whitespace-nowrap mb-4">
          <p> This month</p>
          <ArrowDown />
        </button>
      </div>
      <ReportCard />
      <TotalPayouts />
      <CategoryChart />
      <TopVendors />
    </div>
  );
};

export default Reports;
