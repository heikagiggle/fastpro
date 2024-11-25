'use client';
import React, { ChangeEvent, useState } from 'react';

import { SearchIcon } from '../../../components/icons/search-icon';

import ProjectTabButtons from '../../../admin/dashboard/projects/ProjectTabButtons';

interface TopBarProps {
  setSearchQuery: (query: string) => void;
}

const RfpTopBar = ({ setSearchQuery }: TopBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query: string = event.target.value;
    setSearchTerm(query);
    setTimeout(() => {
      setSearchQuery(query);
    }, 1500);
  };

  return (
    <>
      <div className="flex justify-between border-b border-[#E5E5E5] pb-3">
        <div className="flex items-center gap-x-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-4 text-[15px]">
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pl-2">
                  <SearchIcon />
                </div>

                <input
                  type="search"
                  id="search"
                  className="containerBorder block w-[400px] pl-10 px-2 py-2 ps-10 text-sm outline-none"
                  placeholder="search"
                  value={searchTerm}
                  onChange={handleSearch}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-3">
          <ProjectTabButtons />
        </div>
      </div>
    </>
  );
};

export default RfpTopBar;
