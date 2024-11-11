import { FilterIcon } from '../../../../components/icons/filter';
import { RequestTable } from './RequestTable';

const Requests = () => {
  return (
    <div className="border border-[rgba(26,26,26,0.5)] rounded-2xl mt-3 p-5">
      <div className="flex justify-between items-center py-2">
        <button className="lg:flex items-center gap-x-2 text-[#344054] containerBorder px-2 py-2">
          Shortlists
        </button>

        <div className="flex gap-x-3">
          <button className=" cursor-pointer items-center bg-[#E94A3F] text-white shadow-sm rounded-md px-3 py-2">
            Reject
          </button>
          <button className="lg:flex items-center gap-x-2 text-[#344054] containerBorder px-2 py-2">
            <FilterIcon />
            <p>Filters</p>
          </button>
        </div>
      </div>

      <RequestTable />
    </div>
  );
};

export default Requests;
