import { StatCard } from '../../../../components/widgets/stat-card/StatCard';

const ReportCard = () => {
  const data = [
    { title: 'Total Payouts', value: '₦ 2,460,944.50' },
    { title: 'Total Completed Projects', value: 24 },
    { title: 'RFP Requests', value: 32 },
    { title: 'Pending Payments', value: 13 },
  ];

  return (
    <div className="flex w-full gap-4">
      {data.map((item, index) => (
        <StatCard
          key={`card-${index}`}
          title={item.title}
          value={item.value}
          className="w-full"
        />
      ))}
    </div>
  );
};

export default ReportCard;
