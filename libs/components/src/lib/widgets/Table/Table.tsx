/** Warning! Do not import into a client component */

import { FC, Suspense } from 'react';

import { cn } from '../../../utils/cn';
import { ScrollArea } from '../../ui/scroll-area';
import {
  Table as UITable,
  TableHead,
  TableHeader,
  TableRow,
} from '../../ui/table';
import { TableBody } from './TableBody';
import { TableSkeleton } from './TableSkeleton';
import { TableFetcher, TableHeadingProp } from './types';
import { v4 } from 'uuid';

type Props<T, TH extends TableHeadingProp> = {
  className?: string;
  name: string;
  heading: TH;
  fetcher: TableFetcher<T>;
  body: FC<{ data: T }>;
};

export async function Table<T, TH extends TableHeadingProp>({
  className,
  name,
  heading,
  body,
  fetcher,
}: Props<T, TH>) {
  return (
    <ScrollArea className={'relative'}>
      <UITable className={cn(className)} id={name}>
        <TableHeader className={'sticky top-0 z-10 bg-muted'}>
          <TableRow>
            {heading.map((item, index) => (
              <TableHead
                key={`${name}-heading-${index}`}
                className={cn('whitespace-nowrap', item.className)}
              >
                {item.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <Suspense
          fallback={<TableSkeleton rows={10} columns={heading.length} />}
          key={v4()}
        >
          <TableBody name={name} body={body} fetcher={fetcher} />
        </Suspense>
      </UITable>
    </ScrollArea>
  );
}
