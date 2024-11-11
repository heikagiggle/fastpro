import { Card } from '@app/components/lib/ui/card';
import { Table } from '@app/components/lib/widgets/Table/Table';
import { ApiResponse } from '@app/types';

import { virtualAccountHeader } from '../../../utils/constants/headers';
import { HistoryTableBody } from './HistoryTableBody';
import { HistoryProps, HistoryPropsData } from './data';
import DateSelector from '../../../components/date-picker/DateSelector';

export function HistoryTable() {
  function fetcher(): Promise<ApiResponse<HistoryProps[]>> {
    return Promise.resolve({
      success: true,
      data: HistoryPropsData,
    });
  }

  return (
    <Card className={'w-full flex flex-col mt-6'}>
      <div className="flex justify-between items-center gap-x-2 py-4 px-4 mb-2">
        <h3 className="text-sm text-[#666666] font-medium">History</h3>

        <div className="flex gap-x-2 items-center">
          <DateSelector />

          <p className="text-xs text-[#7209B7] cursor-pointer">See all</p>
        </div>
      </div>
      <Table
        name={'pending-table'}
        fetcher={fetcher}
        heading={virtualAccountHeader}
        // body={({ data }) => <PendingTableBody bids={[data]} />}
        body={HistoryTableBody}
      />
    </Card>
  );
}
