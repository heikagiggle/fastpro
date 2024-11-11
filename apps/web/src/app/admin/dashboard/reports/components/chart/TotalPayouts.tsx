import { Card } from '@app/components/lib/ui/card';
import { cn } from '@app/components/utils/cn';
import { LineChart } from '@app/components/lib/widgets/LineChart/LineChart';

type Props = {
  className?: string;
};

const TotalPayouts = (props: Props) => {
  const chartData = [
    {
      label: 'Payouts',
      key: 'payouts',
      data: [
        { key: 'Monday', value: 12.5 },
        { key: 'Tuesday', value: 9.5 },
        { key: 'Wednesday', value: 6.9 },
        { key: 'Thursday', value: 7.8 },
        { key: 'Friday', value: 5 },
      ],
    },
  ];

  return (
    <Card
      className={cn('flex flex-col gap-5 w-full h-full mt-6', props.className)}
    >
      <div className="flex items-center gap-x-2 py-4 px-4 border-b border-[#EAECF0] pb-5 pt-8">
        <h3 className="text-base text-[#0D0D0D] font-medium">Total Payouts</h3>
      </div>
      <div className={'w-full h-[250px] pr-8 mb-6'}>
        <LineChart charts={chartData} />
      </div>

    </Card>
  );
};

export default TotalPayouts;
