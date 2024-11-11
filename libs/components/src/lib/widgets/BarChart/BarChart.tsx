'use client';

import {
  Bar,
  BarChart as ReBarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { BaseAxisProps } from 'recharts/types/util/types';
import { Props } from './types';
import { useMemo } from 'react';

const defaultColors = ['#4B88F8', '#38BDF8', '#FFA500', '#A855F7', '#22C55E'];

const tickProps: BaseAxisProps = {
  tick: { fill: '#727b8e', fontSize: '0.85rem' },
  axisLine: false, // Hides the axis line
  tickLine: false, 
};

export function BarChart(props: Props) {
  const data = useMemo(() => {
    const formatted: Record<string, Record<string, number>> = {};

    for (const i in props.charts) {
      for (const k in props.charts[i]?.data ?? []) {
        const chart = props.charts[i]?.data?.[k];
        if (!chart) continue;

        formatted[chart.key] = {
          ...(formatted[chart.key] ?? {}),
          [props.charts[i]?.key ?? '']: chart.value,
        };
      }
    }

    return Object.entries(formatted).map(([name, value]) => ({
      name,
      ...value,
    }));
  }, [props.charts]);

  return (
    <ResponsiveContainer
      height={'100%'}
      width={'100%'}
      className={props.className}
    >
      <ReBarChart data={data} layout="vertical" barGap={10} barSize={20}>
        <CartesianGrid horizontal={false} stroke={'#F2F4F7'} />
        <XAxis type="number" {...tickProps} />
        <YAxis type="category" dataKey="name" {...tickProps} width={100} />
        <Tooltip cursor={{ fill: 'transparent' }} />
        {props.charts.map((chart, index) => (
          <Bar
            dataKey={chart.key}
            fill={chart.color ?? defaultColors[index % defaultColors.length]}
            key={`bar-${chart.key}`}
            radius={[0, 5, 5, 0]}
          />
        ))}
      </ReBarChart>
    </ResponsiveContainer>
  );
}
