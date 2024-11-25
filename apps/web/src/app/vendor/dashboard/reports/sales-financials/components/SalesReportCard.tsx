import { StatCard } from '../../../../components/widgets/stat-card/StatCard';

const SalesReportCard = () => {
  const data = [
    { title: 'Total Sales Revenue', value: '₦ 2,460,944.50' },
    { title: 'Total Orders', value: 134 },
    { title: 'Jobs Completed', value: 32 },
    { title: 'Rating', value: 4.5 / 5.0 },
  ];

  return (
    <div className="flex w-full gap-4 mt-4">
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

export default SalesReportCard;
