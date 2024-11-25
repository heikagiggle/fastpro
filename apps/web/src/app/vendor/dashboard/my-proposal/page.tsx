'use client';
import { useState } from 'react';
import ProposalTopBar from './proposal-top-bar';
import { ProposalTable } from './components/my-proposal-table';

const MyProposal = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <ProposalTopBar setSearchQuery={setSearchQuery} />
      <ProposalTable />
    </div>
  );
};

export default MyProposal;
