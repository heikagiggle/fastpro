import { Card } from '@app/components/lib/ui/card';
import { Table } from '@app/components/lib/widgets/Table/Table';
import { ApiResponse } from '@app/types';

import { PendingProps, PendingPropsData } from '../table-body/data';
import { AccountPayableTableHeader } from '../../../utils/constants/headers';
import { ApprovedTableBody } from '../table-body/ApprovedTableBody';

export function ApprovedTable() {
  function fetcher(): Promise<ApiResponse<PendingProps[]>> {
    return Promise.resolve({
      success: true,
      data: PendingPropsData,
    });
  }

  return (
    <Card className={'w-full flex flex-col mt-6'}>
      <Table
        name={'approved-table'}
        fetcher={fetcher}
        heading={AccountPayableTableHeader}
        // body={({ data }) => <PendingTableBody bids={[data]} />}
        body={ApprovedTableBody}
      />
    </Card>
  );
}
