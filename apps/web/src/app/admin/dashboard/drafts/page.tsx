import Link from 'next/link';
import React from 'react';
import { rfps } from '../rfp-management/open/data';

const Drafts = () => {
  return (
    <div className="flex flex-col">
      {rfps.map((rfp) => (
        <div key={rfp.id}>
          <div className="flex flex-col gap-y-1.5 border-b my-2 border-[#E5E5E5] pb-2">
            <div className="flex justify-between py-2">
              <div className="flex gap-x-2 items-center text-sm">
                <p className="text-[#7209B7]">{rfp.id}</p>
                <p className="text-[#666666]">{rfp.deliveryDate} </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <div className={`w-2.5 h-2.5 rounded-full bg-gray-300`} />
                <p className="text-[#999999] text-sm">Drafts</p>
              </div>
            </div>
            <div>
              <Link href={`/admin/dashboard/rfp-management/new-rfp`}>
                <h1 className=" font-medium text-2xl cursor-pointer">
                  {rfp.name}
                </h1>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Drafts;
