'use client';
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from 'recharts';

import { Card, CardContent, CardHeader } from '@app/components/lib/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@app/components/lib/ui/chart';
import { CategoryChartIcon } from '../../../components/icons/categorychart';
import { ArrowDown } from '../../../../components/icons/arrow-down';

//  TODO come put a correct key name
const chartData = [
  { category: 'logistics', amount: 600000, fill: '#335CFF' },
  { category: 'utilities', amount: 250010, fill: '#47C2FF' },
  { category: 'supplies', amount: 200087, fill: '#FFAA47' },
  { category: 'admin', amount: 180000, fill: '#7D52F4' },
  { category: 'other', amount: 100000, fill: '#6DA544' },
];

const chartConfig = {
  amount: {
    label: 'Amount',
  },
  logistics: {
    label: 'Logistics',
    color: 'hsl(var(--chart-1))',
  },
  utilities: {
    label: 'Utilities',
    color: 'hsl(var(--chart-2))',
  },
  supplies: {
    label: 'Supplies',
    color: 'hsl(var(--chart-3))',
  },
  admin: {
    label: 'Admin',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

export function CategoryChart() {
  return (
    <Card className="w-full h-full mt-6">
      <CardHeader>
        <div className="flex justify-between items-center gap-x-2 py-4 px-4 border-b border-[#EAECF0] pb-3 mb-4">
          <div className="flex gap-x-2 items-center">
            <CategoryChartIcon />
            <h3 className="text-base text-[#0D0D0D] font-medium">
              Top Categories
            </h3>
          </div>
          <button className="border flex gap-x-1 items-center shadow-sm border-[#EAECF0] px-3 py-1 rounded-md">
            This month
            <ArrowDown />
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="min-h-[200px] w-full max-h-[200px]"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 10,
            }}
          >
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <XAxis
              dataKey="amount"
              type="number"
              stroke="#e5e5e5"
              axisLine={{ stroke: '#e5e5e5' }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <CartesianGrid
              horizontal={false}
              vertical={true}
              stroke="#e5e5e5"
              strokeDasharray="3 3"
            />
            <Bar dataKey="amount" layout="vertical" radius={5} barSize={20} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
