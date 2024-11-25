import { Card } from '@app/components/lib/ui/card';
import { Table } from '@app/components/lib/widgets/Table/Table';
import { ApiResponse } from '@app/types';

import { OpenProps, OpenPropsData } from '../table-body/data';
import { AccountOpenTableHeader } from '../../../../../utils/constants/headers';
import { OpenTableBody } from '../table-body/OpenTableBody';

export function OpenTable() {
  function fetcher(): Promise<ApiResponse<OpenProps[]>> {
    return Promise.resolve({
      success: true,
      data: OpenPropsData,
    });
  }

  return (
    <Card className={'w-full flex flex-col mt-6'}>
      <Table
        name={'approved-table'}
        fetcher={fetcher}
        heading={AccountOpenTableHeader}
        // body={({ data }) => <OpenTableBody bids={[data]} />}
        body={OpenTableBody}
      />
    </Card>
  );
}
