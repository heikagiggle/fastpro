import { Card } from '@app/components/lib/ui/card';
import { VendorsData } from './data';
import { Briefcase } from '../../../../../../components/icons/briefcase';

const TopVendors = () => {
  return (
    <Card className={'flex flex-col w-full h-full mt-6 p-4'}>
      <div className="flex justify-between border-b border-[#EAECF0] pb-3 mb-">
        <div className="flex items-center gap-x-2">
          <Briefcase />
          <h3 className="text-base text-[#0D0D0D] font-medium"> Top Vendors</h3>
        </div>

        <button className="text-xs rounded-lg px-2 py-2 my-2 border-2 border-[#e5e5e5] cursor-pointer whitespace-nowrap">
          See all
        </button>
      </div>
      <div className={'w-full h-[270px]'}>
        {VendorsData.map((data) => (
          <div key={data.vendor}>
            <div className="flex justify-between py-2 border-b border-[#EAECF0]">
              <div className="flex flex-col gap-y-2 ">
                <p className="font-medium lg:text-base text-sm">
                  {data.vendor}
                </p>
                <p className="text-[#666666] text-sm">{data.services}</p>
              </div>
              <div className="flex flex-col gap-y-2">
                <p className="font-medium lg:text-base text-sm">
                  {data.amount}
                </p>
                <p className="text-[#666666] text-center bg-[#F2F2F2] rounded-full text-sm">
                  {data.awarded_rfp} <span>Awarded RFP</span>{' '}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TopVendors;
