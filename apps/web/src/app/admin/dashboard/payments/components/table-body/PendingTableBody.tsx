import { TableCell, TableRow } from '@app/components/lib/ui/table';
import { PendingProps } from './data';
import Link from 'next/link';

type Props = {
  data: PendingProps;
};

export function PendingTableBody({ data }: Props) {
  return (
    <TableRow>
      <TableCell className={'w-[158px] pl-5 cursor-pointer'}>
        <p>{data.invoice_number}</p>
      </TableCell>
      <TableCell className={'w-[158px] pl-5'}>
        <p className="w-[110px] truncate py-1">{data.project_title}</p>
      </TableCell>
      <TableCell className={'w-[158px] py-1'}>
        <p>{data.vendor_name}</p>
      </TableCell>
      <TableCell className={'w-[158px] py-1'}>
        <p>{data.amount_due}</p>
      </TableCell>
      <TableCell className={'w-[158px] py-1'}>
        <p>{data.invoice_date}</p>
      </TableCell>
      <TableCell className={'w-[158px] py-1'}>
        <p>{data.payment_terms}</p>
      </TableCell>
      <TableCell className=" w-[158px] py-1">
        <p className="ml-1 text-[#7209B7] cursor-pointer">{data.status}</p>
      </TableCell>
    </TableRow>
  );
}
