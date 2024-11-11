import { StatCard } from '../../../components/widgets/stat-card/StatCard';

const DashboardCardStats = () => {
  const data = [
    { title: 'Total Payouts', value: '₦ 2,460,944.50' },
    { title: 'Open RFP', value: 24 },
    { title: 'RFP Requests', value: 32 },
    { title: 'Awarded RFP', value: 13 },
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

export default DashboardCardStats;
