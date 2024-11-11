import { TableCell, TableRow } from '@app/components/lib/ui/table';
import { NewbidProps } from './data';
import { StarIcon } from '../../../components/icons/star';

type Props = {
  data: NewbidProps;
};

export function NewbidTableBody({ data }: Props) {
  return (
    <TableRow>
      <TableCell className={'w-[52x] pl-5'}>
        <input type="checkbox" className="cursor-pointer" />
      </TableCell>
      <TableCell className={'w-[146px] pl-5'}>
        <p>{data.vendor}</p>
      </TableCell>
      <TableCell className={'w-[159px]'}>
        <p className="w-[111px] truncate">{data.proposal}</p>
      </TableCell>
      <TableCell className={'w-[445px]'}>
        <p className="w-[397px] truncate">{data.summary}</p>
      </TableCell>
      <TableCell className={'w-[135px]'}>
        <div className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon key={index} primaryColor={index < data.rating ? 'gold' : 'gray'} />
          ))}
        </div>
      </TableCell>
      <TableCell className={'w-[135px]'}>
        <p>{data.date}</p>
      </TableCell>
    </TableRow>
  );
}
