import { HistoryTable } from './components/table/HistoryTable';
import WithdrawModal from './components/modal/withdraw/WithdrawModal';
import TopupModal from './components/modal/topup/TopupModal';

const VirtualAccounts = () => {
  return (
    <div className="border border-[rgba(26,26,26,0.5)] rounded-2xl">
      <div className="bg-[#FBFBFB] rounded-tl-2xl  rounded-tr-2xl items-center py-2 px-10">
        <p className="text-[#181818] text-xs ">Balance</p>
      </div>

      <div className="border-b border-[#E5E5E5] mt-8 mb-3 px-10 pb-6">
        <h1 className="text-3xl font-medium">N 40,000</h1>
      </div>

      <div>
        <div className="flex gap-x-3 font-medium px-10 mt-1">
          <WithdrawModal />
         <TopupModal/>
        </div>

        <div>
          <HistoryTable />
        </div>
      </div>
    </div>
  );
};

export default VirtualAccounts;
