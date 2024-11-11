'use client';

import { PieChart as REPieChart,ResponsiveContainer, Tooltip } from 'recharts';
import { Pie } from 'recharts';

type Props = {
  className?: string;
  data: { value: number; name: string; fill?: string }[];
};

export function PieChart(props: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%" className={props.className}>
      <REPieChart>
        <Pie
          data={props.data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={'50%'}
          outerRadius={'100%'}
          fill="#82ca9d"
        />
        <Tooltip />
      </REPieChart>
    </ResponsiveContainer>
  );
}
