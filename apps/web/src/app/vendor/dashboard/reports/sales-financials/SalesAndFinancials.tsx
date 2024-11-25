import React from 'react';
import SalesReportCard from './components/SalesReportCard';
import TopVendors from './components/top-vendors/TopVendors';
import { CategoryChart } from '../../components/charts/CategoryChart';

const SalesAndFinancials = () => {
  return (
    <div>
      <SalesReportCard />
      <CategoryChart />
      <TopVendors />
    </div>
  );
};

export default SalesAndFinancials;
