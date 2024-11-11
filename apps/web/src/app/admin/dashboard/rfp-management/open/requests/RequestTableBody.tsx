import { TableCell, TableRow } from '@app/components/lib/ui/table';
import { NewbidProps } from '../../../components/table-body/data';
import Link from 'next/link';

type Props = {
  data: NewbidProps;
};

export function RequestTableBody({ data }: Props) {
  return (
    <TableRow>
      <TableCell className={'w-[52x] pl-5'}>
        <input type="checkbox" className="cursor-pointer" />
      </TableCell>
      <TableCell className={'w-[146px] pl-5'}>
        <Link
          href={`/admin/dashboard/rfp-management/open/requests/${data.id}`}
        >
          <p className="cursor-pointer">{data.vendor}</p>
        </Link>
      </TableCell>
      <TableCell className={'w-[159px]'}>
        <p className="w-[111px] truncate">{data.proposal}</p>
      </TableCell>
      <TableCell className={'w-[445px]'}>
        <p className="w-[397px] truncate">{data.summary}</p>
      </TableCell>
      <TableCell className={'w-[135px]'}>
        <p>{data.rating}</p>
      </TableCell>
      <TableCell className={'w-[135px]'}>
        <p>{data.date}</p>
      </TableCell>
    </TableRow>
  );
}
