import { ReactNode } from 'react';
import AdminSidebar from '../components/widgets/sidebar/AdminSidebar';
import TopBar from '../components/widgets/topbar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex gap-x- min-h-screen bg-white">
      <div>
        <AdminSidebar />
      </div>

      <main className="ml-[15%] w-full flex-1 flex flex-col min-h-screen">
        <div className="border-b border-[#E5E5E5]">
          <TopBar />
        </div>

        <div className=" h-full rounded-xl py-5 mx-10 overflow-y-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
