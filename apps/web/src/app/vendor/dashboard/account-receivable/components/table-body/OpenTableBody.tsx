'use client'

import { TableCell, TableRow } from '@app/components/lib/ui/table';
import { OpenProps } from './data';
import { useRouter } from 'next/navigation';

type Props = {
  data: OpenProps;
};

export function OpenTableBody({ data }: Props) {
  const router = useRouter();
  return (
    <TableRow>
      <TableCell className={'w-[158px] pl-5 cursor-pointer'}>
        <p>{data.project_title}</p>
      </TableCell>
      <TableCell className={'w-[158px] pl-5'}>
        <p className="w-[110px] truncate">{data.company_info}</p>
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
        <button
          className="py-1 px-2 bg-[#7209B7] text-white rounded-lg"
          onClick={() =>
            router.push('/vendor/dashboard/account-receivable/generate-invoice')
          }
        >
          Generate Invoice
        </button>
      </TableCell>
    </TableRow>
  );
}
