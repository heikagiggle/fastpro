import React from 'react';
import { ExportIcon } from '../../components/icons/export';
import { ArrowdropdownIcon } from '../../components/icons/arrowdropdown';

const RfpReportTabs = () => {
  return (
    <div className="flex gap-x-4 items-center">
      <button className="border flex gap-x-1 items-center shadow-sm border-[#EAECF0] px-3 py-1 rounded-md whitespace-nowrap">
        <ExportIcon />
        <p>Export</p>
      </button>
      <button className="border flex gap-x-1 items-center shadow-sm border-[#EAECF0] px-3 py-1 rounded-md whitespace-nowrap">
        This month
        <ArrowdropdownIcon />
      </button>
    </div>
  );
};

export default RfpReportTabs;
