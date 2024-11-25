import { Card } from '@app/components/lib/ui/card';
import { Table } from '@app/components/lib/widgets/Table/Table';
import { ApiResponse } from '@app/types';
import { BidTableHeader } from '../../../../utils/constants/headers';
import { NewbidTableBody } from '../table-body/NewbidTableBody';

import { NewbidProps, NewbidPropsData } from '../table-body/data';

export function NewBidTable() {
  function fetcher(): Promise<ApiResponse<NewbidProps[]>> {
    return Promise.resolve({
      success: true,
      data: NewbidPropsData,
    });
  }

  return (
    <Card className={'w-full flex flex-col mt-6'}>
      <div className="flex justify-between items-center gap-x-2 py-4 px-4 border-b border-[#EAECF0] pb-3 mb-4">
        <h3 className="text-sm text-[#666666] font-medium">New Bids</h3>
        <button className="border shadow-sm border-[#EAECF0] px-3 py-1 rounded-md">
          See all
        </button>
      </div>
      <Table
        name={'admin-bid-table'}
        fetcher={fetcher}
        heading={BidTableHeader}
        // body={({ data }) => <NewbidTableBody bids={[data]} />}
        body={NewbidTableBody}
      />
    </Card>
  );
}
