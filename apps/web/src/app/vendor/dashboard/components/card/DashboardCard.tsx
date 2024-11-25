import { StatCard } from '../../../components/widgets/stat-card/StatCard';

const DashboardCardStats = () => {
  const data = [
    { title: 'Active Submissions', value: 24 },
    { title: 'Ongoing Projects', value: 32 },
    { title: 'Upcoming Deadlines', value: 13 },
    { title: 'Rating', value: 4.6 / 5 },
  ];

  // TODO   put star icon for ratings

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
