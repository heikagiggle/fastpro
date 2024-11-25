import { Card } from '@app/components/lib/ui/card';
import { Table } from '@app/components/lib/widgets/Table/Table';
import { ApiResponse } from '@app/types';

import { PendingTableBody } from '../table-body/PendingTableBody';
import { PendingProps, PendingPropsData } from '../table-body/data';
import { AccountPayableTableHeader } from '../../../../../utils/constants/headers';

export function PendingTable() {
  function fetcher(): Promise<ApiResponse<PendingProps[]>> {
    return Promise.resolve({
      success: true,
      data: PendingPropsData,
    });
  }

  return (
    <Card className={'w-full flex flex-col mt-6'}>
      <Table
        name={'pending-table'}
        fetcher={fetcher}
        heading={AccountPayableTableHeader}
        // body={({ data }) => <PendingTableBody bids={[data]} />}
        body={PendingTableBody}
      />
    </Card>
  );
}
