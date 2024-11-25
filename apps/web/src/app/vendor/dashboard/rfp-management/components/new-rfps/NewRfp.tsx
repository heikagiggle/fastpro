import { rfps } from './data';
import Link from 'next/link';

const NewRfp = () => {
  return (
    <div className="flex flex-col mt-3">
      {rfps.map((rfp) => (
        <div key={rfp.id}>
          <div className="flex flex-col gap-y-1.5 border-b my-2 border-[#E5E5E5] pb-2">
            <div className="flex justify-between py-2">
              <div className="flex gap-x-2 items-center text-sm">
                <p className="text-[#7209B7]">{rfp.id}</p>
                <p className="text-[#666666]">{rfp.deliveryDate} </p>
              </div>
              <div className="flex gap-x-2 items-center">
                <p className="text-base">{rfp.service}</p>
              </div>
            </div>
            <div>
              <Link
                href={`/vendor/dashboard/rfp-management/${rfp.id}`}
              >
                <h1 className=" font-medium text-2xl cursor-pointer">
                  {rfp.name}
                </h1>
              </Link>

              <p className="py-2 ">{rfp.description}</p>
              <Link
                href={`/vendor/dashboard/rfp-management/${rfp.id}`}
              >
                <p className="underline text-[#7209B7] cursor-pointer">More</p>
              </Link>
            </div>
            <div className="flex justify-between py-2">
              <div className="flex gap-x-3 items-center">
                <p className=" text-[#39055C] text-xs">{rfp.company}</p>
                <p className=" text-xs">
                  <span className="text-[#666666]">Deadline: </span>
                  {rfp.deadline}{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewRfp;
