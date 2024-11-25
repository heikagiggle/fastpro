import { Card } from '@app/components/lib/ui/card';
import { Table } from '@app/components/lib/widgets/Table/Table';
import { ApiResponse } from '@app/types';
import {
  NewbidPropsData,
  NewbidProps,
} from '../../../components/table-body/data';
import { BidTableHeader } from '../../../../../utils/constants/headers';
import { RequestTableBody } from './RequestTableBody';

export function RequestTable() {
  function fetcher(): Promise<ApiResponse<NewbidProps[]>> {
    return Promise.resolve({
      success: true,
      data: NewbidPropsData,
    });
  }

  return (
    <Card className={'w-full flex flex-col mt-6'}>
      <Table
        name={'admin-bid-table'}
        fetcher={fetcher}
        heading={BidTableHeader}
        body={RequestTableBody}
      />
    </Card>
  );
}
