import { Skeleton } from '../../ui/skeleton';
import { TableBody, TableCell, TableRow } from '../../ui/table';

type Props = {
  rows: number;
  columns: number;
};

export function TableSkeleton(props: Props) {
  return (
    <TableBody>
      {Array.from(Array(props.rows)).map((_, row) => (
        <TableRow key={`skeleton-${row}`}>
          {Array.from(Array(props.columns)).map((_, col) => (
            <TableCell key={`skeleton-${row}-${col}`}>
              <Skeleton className={'w-full rounded-full h-[1rem]'} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}
