'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@app/components/lib/ui/tabs';
import SalesAndFinancials from './sales-financials/SalesAndFinancials';
import RfpReports from './rfp-reports/RfpReports';
import RfpReportTabs from './RfpReportTabs';

const Reports = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeTab = searchParams.get('tab') || 'sales-financials';

  const handleTabChange = (newTab: string) => {
    router.push(`?tab=${newTab}`);
  };

  useEffect(() => {
    if (!searchParams.get('tab')) {
      router.replace(`?tab=sales-financials`);
    }
  }, [router, searchParams]);

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      <div className=" flex justify-between ">
        <TabsList className="w-[70%] justify-start border-b border-[#E5E5E5]">
          <TabsTrigger value="sales-financials">
            Sales And Financials
          </TabsTrigger>
          <TabsTrigger value="rfp-reports">RFP Reports</TabsTrigger>
        </TabsList>

        <RfpReportTabs />
      </div>
      <TabsContent value="sales-financials">
        <SalesAndFinancials />
      </TabsContent>
      <TabsContent value="rfp-reports">
        <RfpReports />
      </TabsContent>
    </Tabs>
  );
};

export default Reports;
