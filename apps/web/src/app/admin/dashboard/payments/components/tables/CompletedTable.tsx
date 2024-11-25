import { Card } from '@app/components/lib/ui/card';
import { Table } from '@app/components/lib/widgets/Table/Table';
import { ApiResponse } from '@app/types';

import { CompletedProps, CompletedPropsData } from '../table-body/data';
import { CompletedPaymentTableHeader } from '../../../../../utils/constants/headers';
import { CompletedTableBody } from '../table-body/CompletedTableBody';

export function CompletedTable() {
  function fetcher(): Promise<ApiResponse<CompletedProps[]>> {
    return Promise.resolve({
      success: true,
      data: CompletedPropsData,
    });
  }

  return (
    <Card className={'w-full flex flex-col mt-6'}>
      <Table
        name={'approved-table'}
        fetcher={fetcher}
        heading={CompletedPaymentTableHeader}
        // body={({ data }) => <PendingTableBody bids={[data]} />}
        body={CompletedTableBody}
      />
    </Card>
  );
}
