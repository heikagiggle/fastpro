'use client';
import React, { useState } from 'react';
import RfpTopBar from './rfp-top-bar';
import NewRfp from './components/new-rfps/NewRfp';

const RfpManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <RfpTopBar setSearchQuery={setSearchQuery} />
      <NewRfp />
    </div>
  );
};

export default RfpManagement;
