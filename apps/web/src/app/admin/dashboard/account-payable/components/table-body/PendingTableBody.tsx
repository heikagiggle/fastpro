import { TableCell, TableRow } from '@app/components/lib/ui/table';
import { PendingProps } from './data';
import { PendingIcon } from '../../../../components/icons/pending';
import Link from 'next/link';

type Props = {
  data: PendingProps;
};

export function PendingTableBody({ data }: Props) {
  return (
    <TableRow>
      <TableCell className={'w-[158px] pl-5 cursor-pointer'}>
        <Link href={`/admin/dashboard/account-payable/pending/${data.id}`}>
          {' '}
          <p>{data.invoice_number}</p>
        </Link>
      </TableCell>
      <TableCell className={'w-[158px] pl-5'}>
        <p className="w-[110px] truncate">{data.project_title}</p>
      </TableCell>
      <TableCell className={'w-[158px]'}>
        <p>{data.vendor_name}</p>
      </TableCell>
      <TableCell className={'w-[158px]'}>
        <p>{data.amount_due}</p>
      </TableCell>
      <TableCell className={'w-[158px]'}>
        <p>{data.invoice_date}</p>
      </TableCell>
      <TableCell className={'w-[158px]'}>
        <p>{data.payment_terms}</p>
      </TableCell>
      <TableCell className=" w-[158px]">
        <div className="flex items-center">
          <PendingIcon />
          <p className="ml-1">{data.status}</p>
        </div>
      </TableCell>
    </TableRow>
  );
}
