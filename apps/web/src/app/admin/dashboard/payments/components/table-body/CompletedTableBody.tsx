import { TableCell, TableRow } from '@app/components/lib/ui/table';
import { CompletedProps } from './data';

type Props = {
  data: CompletedProps;
};

export function CompletedTableBody({ data }: Props) {
  return (
    <TableRow>
      <TableCell className={'w-[158px] pl-5'}>
        <p>{data.invoice_number}</p>
      </TableCell>
      <TableCell className={'w-[158px] pl-5'}>
        <p className="ml-1 text-[#7209B7] cursor-pointer">
          {data.purchase_order_ID}
        </p>
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
        <p className='text-[#1FC16B]'>{data.status}</p>
      </TableCell>
    </TableRow>
  );
}
