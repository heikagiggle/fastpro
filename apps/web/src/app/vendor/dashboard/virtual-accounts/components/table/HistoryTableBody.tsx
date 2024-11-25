import { TableCell, TableRow } from '@app/components/lib/ui/table';
import { HistoryProps } from './data';
import Image from 'next/image';

type Props = {
  data: HistoryProps;
};

export function HistoryTableBody({ data }: Props) {
  return (
    <TableRow>
      <TableCell className={'w-[358px] pl-5 cursor-pointer'}>
        <div className="flex gap-x-2 items-center">
          <Image src={'/uba.png'} width={30} height={30} alt="bank" />
          <p>{data.bank_name}</p>
        </div>
      </TableCell>
      <TableCell className={'w-[358px] pl-5'}>
        <p>{data.account_name}</p>
      </TableCell>
      <TableCell className={'w-[134px]'}>
        <div className="flex flex-col">
          <p>{data.date}</p>
          <p>{data.time}</p>
        </div>
      </TableCell>
      <TableCell className={'w-[152px] text-center'}>
        <p>{data.amount}</p>
      </TableCell>
      <TableCell className={'w-[115px] text-[#027A48] text-center'}>
        <p className=" text-[#027A48] w-[91px] font-medium bg-[#ECFDF3]">{data.status}</p>
      </TableCell>
    </TableRow>
  );
}
