import { TableCell, TableRow } from '@app/components/lib/ui/table';
import { PendingProps } from './data';

type Props = {
  data: PendingProps;
};

export function DeniedTableBody({ data }: Props) {
  return (
    <TableRow>
      <TableCell className={'w-[158px] pl-5 cursor-pointer'}>
        <p>{data.invoice_number}</p>
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
      <TableCell className={'w-[158px]'}>
        <p>{data.status}</p>
      </TableCell>
    </TableRow>
  );
}
