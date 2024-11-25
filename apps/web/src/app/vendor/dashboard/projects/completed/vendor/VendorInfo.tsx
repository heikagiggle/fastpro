import React from 'react';
import { vendorDetails } from './data';
import Link from 'next/link';
import { StarIcon } from '../../../../components/icons/star';

const VendorInfo = () => {
  return (
    <div className="border border-[rgba(26,26,26,0.5)] rounded-2xl mt-3 p-5">
      <div className="grid md:grid-cols-2 gap-4">
        {vendorDetails.map((vendor) => (
          <div key={vendor.id}>
            <div className="bg-[#F7F7F7] p-4 w-full h-[360px] flex flex-col rounded-xl">
              <div className="flex flex-col gap-y-2 flex-grow">
                <p className="uppercase text-xs">Vendor Info</p>
                <Link
                  href={`/admin/dashboard/projects/completed/vendor/${vendor.id}?name=${vendor.name}`}
                >
                  <p className="text-2xl font-medium cursor-pointer">
                    {vendor.name}
                  </p>
                </Link>

                <p className="text-base">{vendor.description}</p>
              </div>

              <div className="flex flex-col gap-y-3 mt-auto">
                <div>
                  <p className="text-xs font-semibold">Rating</p>
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarIcon
                        key={index}
                        primaryColor={index < vendor.rating ? 'gold' : 'gray'}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-semibold">Jobs completed</p>
                  <p className="text-sm">{vendor.jobs_completed}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorInfo;
