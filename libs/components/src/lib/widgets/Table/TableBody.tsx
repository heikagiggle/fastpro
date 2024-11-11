import { ApiResponse } from '@app/types';
import { FC } from 'react';

import { TableBody as UITableBody } from '../../ui/table';
import { TableFetcher, TableHeadingProp } from './types';

type Props<T> = {
  name: string;
  fetcher: TableFetcher<T>;
  body: FC<{ data: T }>;
};

export async function TableBody<T>({ name, body, fetcher }: Props<T>) {
  let items: ApiResponse<T[]>;
  const Render = body;

  try {
    items = await fetcher();
    if (!items.success) return <div>Unable to find data</div>;
  } catch (e) {
    console.error('table error :: ', e);
    return <div>Unable to find data</div>;
  }

  return (
    <UITableBody>
      {items.data.map((data, rowIndex) => (
        <Render data={data} key={`${name}-row-${rowIndex}`} />
      ))}
    </UITableBody>
  );
}
