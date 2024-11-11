'use client';

import {
  Line,
  LineChart as ReLineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { useMemo } from 'react';

const defaultColors = ['#F94144'];

type ChartData = {
  key: string;
  value: number;
};

type ChartProps = {
  data: ChartData[];
  label: string;
  key: string;
  color?: string;
};

type Props = {
  charts: ChartProps[];
  className?: string;
};

export function LineChart(props: Props) {
  const data = useMemo(() => {
    const formatted: Record<string, Record<string, number>> = {};

    for (const chart of props.charts) {
      for (const dataPoint of chart.data) {
        formatted[dataPoint.key] = {
          ...(formatted[dataPoint.key] ?? {}),
          [chart.key]: dataPoint.value,
        };
      }
    }

    return Object.entries(formatted).map(([name, value]) => ({
      name,
      ...value,
    }));
  }, [props.charts]);

  const tickStyle = { fill: '#667085', fontSize: '12px', fontWeight: 'bold' };

  return (
    <ResponsiveContainer
      height={'100%'}
      width={'100%'}
      className={props.className}
    >
      <ReLineChart data={data}>
        <CartesianGrid vertical={false} stroke={'#F2F4F7'} />
        <XAxis dataKey="name" stroke={'#F2F4F7'} tick={tickStyle} padding={{ left: 20 }} />
        <YAxis tickLine={false} axisLine={false} />
        <Tooltip cursor={{ fill: 'transparent' }} />
        {props.charts.map((chart, index) => (
          <Line
            type="monotone"
            dataKey={chart.key}
            stroke={chart.color ?? defaultColors[index]}
            key={`line-${chart.key}`}
            dot={true}
            strokeWidth={3}
          />
        ))}
      </ReLineChart>
    </ResponsiveContainer>
  );
}
