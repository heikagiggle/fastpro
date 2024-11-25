import dynamic from 'next/dynamic';

const ReportsPage = dynamic(() => import('./ReportsPage'), { ssr: false });
const Reports = () => {
  return (
    <div>
      <ReportsPage />
    </div>
  );
};

export default Reports;
