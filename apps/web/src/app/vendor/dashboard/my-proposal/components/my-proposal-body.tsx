import { TableCell, TableRow } from '@app/components/lib/ui/table';
import { ProposalProps } from './data';
import Link from 'next/link';

type Props = {
  data: ProposalProps;
};

export function MyProposalsTableBody({ data }: Props) {
  const getStatusTextColor = (status: string) => {
    switch (status) {
      case 'Submitted':
        return '#FF8447';
      case 'Accepted':
        return '#1FC16B';
      case 'Rejected':
        return '#333333';
      default:
        return 'text-gray-500';
    }
  };

  return (
    <TableRow>
      <TableCell className={'w-[168px] pl-5'}>
        <p>{data.date_submitted}</p>
      </TableCell>
      <TableCell className={'w-[600px]'}>
        <Link href={`/vendor/dashboard/my-proposal/${data.id}`}>
          <p>{data.rfpTitle}</p>
        </Link>
      </TableCell>
      <TableCell className={'w-[168px]'}>
        <p>{data.delivery_date}</p>
      </TableCell>
      <TableCell className={'w-[168px] items-center text-center'}>
        <p className={getStatusTextColor(data.status)}>{data.status}</p>
      </TableCell>
    </TableRow>
  );
}
