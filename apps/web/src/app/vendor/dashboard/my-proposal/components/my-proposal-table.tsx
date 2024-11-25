import { Card } from '@app/components/lib/ui/card';
import { Table } from '@app/components/lib/widgets/Table/Table';
import { ApiResponse } from '@app/types';
import { MyProposalHeader } from '../../../../utils/constants/headers';

import { ProposalProps, ProposalPropsData } from './data';
import { MyProposalsTableBody } from './my-proposal-body';

export function ProposalTable() {
  function fetcher(): Promise<ApiResponse<ProposalProps[]>> {
    return Promise.resolve({
      success: true,
      data: ProposalPropsData,
    });
  }

  return (
    <Card className={'w-full flex flex-col mt-6'}>
      <Table
        name={'proposal-table'}
        fetcher={fetcher}
        heading={MyProposalHeader}
        // body={({ data }) => <MyProposalTableBody bids={[data]} />}
        body={MyProposalsTableBody}
      />
    </Card>
  );
}
