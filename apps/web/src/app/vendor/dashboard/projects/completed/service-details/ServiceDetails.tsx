import Image from 'next/image';

type ServiceDetailsProps = {
  status?: string;
};

const ServiceDetails = ({ status }: ServiceDetailsProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'to do':
        return 'bg-yellow-400';
      case 'in progress':
        return 'bg-blue-400';
      case 'completed':
        return 'bg-green-400';
      default:
        return 'bg-[#FF8447]';
    }
  };

  return (
    <div className="border border-[rgba(26,26,26,0.5)] rounded-2xl mt-3 p-5">
      <div className="flex justify-between items-center py-2">
        <div className="flex gap-x-2 items-center text-sm">
          <p className="text-[#7209B7]">RT123456</p>
          <p className="text-[#666666]">21st June 2024</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-base">Legal Services</p>
          <div className="flex gap-x-2 items-center">
            <div
              className={`w-2.5 h-2.5 rounded-full ${getStatusColor(
                status ?? 'bg-gray-400'
              )}`}
            />
            {/* <p className="text-[#999999] text-sm">{status}</p> */}
            <p className="text-[#FF8447] text-sm">In Progress</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className=" font-medium text-xl  border-b border-[#E5E5E5] pb-3 m">
          Seeking legal representation for immigration matters
        </h1>

        <div className="border border-[#E5E5E5] rounded-xl mt-3 gap-2 p-3">
          <p className="text-[#666666] text-xs py-1 uppercase">Info</p>
          <p className="py-1">
            Lorem ipsum dolor sit amet consectetur. Vel adipiscing in arcu
            facilisis imperdiet tellus. Massa tellus a elit sagittis. Mi feugiat
            porttitor sit vestibulum libero maecenas donec. Eget non blandit
            risus sagittis varius pellentesque dictumst ornare. Aliquam
            scelerisque odio mattis maecenas eget tortor lacus ultrices est. Sit
            viverra aenean nullam ante eros. Id non leo semper urna amet mi
            arcu.
          </p>

          <div className="flex justify-between items-center my-5">
            <div>
              <p className="text-xs text-[#666666]">Budget</p>
              <p>N150,000 - N300,000</p>
            </div>
            <div>
              <p className="text-xs text-[#666666]">Requirement</p>
              <p>Intermediate</p>
            </div>
            <div>
              <p className="text-xs text-[#666666]">Project Start - End date</p>
              <p>1st July 2024 - 1st August 2024</p>
            </div>
          </div>
        </div>

        <div className="border border-[#E5E5E5] rounded-xl mt-3 gap-2 p-3">
          <p className="text-[#666666] text-xs py-1 uppercase">
            Specifications
          </p>
          <p className="py-1">Requirement 1</p>
          <p className="py-1">Requirement 2</p>
          <p className="py-1">Requirement 3</p>
          <p className="py-1">Requirement 4</p>
        </div>

        <div className="border border-[#E5E5E5] rounded-xl mt-3 gap-2 p-3">
          <p className="text-[#666666] text-xs py-1 uppercase">
            Terms & Conditions
          </p>
          <p className="py-1 w-[660px]">
            Lorem ipsum dolor sit amet consectetur. Vel adipiscing in arcu
            facilisis imperdiet tellus. Massa tellus a elit sagittis.{' '}
          </p>
        </div>

        <div className="border border-[#E5E5E5] rounded-xl mt-3 gap-2 p-3">
          <p className="text-[#666666] text-xs py-1 uppercase">
            Additional attachments
          </p>
          <p className="py-1 w-[660px]">
            <Image
              src={
                'https://files.skillpaddy.com/public/image/pdf-1730223074859.png'
              }
              alt="pdf image"
              width={50}
              height={50}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
