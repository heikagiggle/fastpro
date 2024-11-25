import { Card } from '@app/components/lib/ui/card';
import { Table } from '@app/components/lib/widgets/Table/Table';
import { ApiResponse } from '@app/types';

import { InvoiceTableBody } from '../table-body/InvoiceTableBody';
import { InvoiceProps, InvoicePropsData } from '../table-body/data';
import { AccountInvoiceTableHeader } from '../../../../../utils/constants/headers';

export function InvoiceTable() {
  function fetcher(): Promise<ApiResponse<InvoiceProps[]>> {
    return Promise.resolve({
      success: true,
      data: InvoicePropsData,
    });
  }

  return (
    <Card className={'w-full flex flex-col mt-6'}>
      <Table
        name={'Invoice-table'}
        fetcher={fetcher}
        heading={AccountInvoiceTableHeader}
        // body={({ data }) => <InvoiceTableBody bids={[data]} />}
        body={InvoiceTableBody}
      />
    </Card>
  );
}
