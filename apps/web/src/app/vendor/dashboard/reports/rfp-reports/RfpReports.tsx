import { CategoryChart } from '../../components/charts/CategoryChart';
import TopVendors from '../sales-financials/components/top-vendors/TopVendors';
import RfpReportCard from './components/RfpReportCard';
import TotalEarnings from './components/TotalEarnings';

const RfpReports = () => {
  return (
    <div>
      <RfpReportCard />
      <TotalEarnings />
      <div className="flex gap-5">
        <CategoryChart />
        <TopVendors />
      </div>
    </div>
  );
};

export default RfpReports;
