'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@app/components/lib/ui/tabs';
import GeneralSettings from './general-settings/GeneralSettings';
import ProfileSettings from './profile-settings/ProfileSettings';
import CompanySettings from './company-settings/CompanySettings';
import Notification from './notification-settings/Notification';
import PrivacySecurity from './privacy-security/PrivacySecurity';

const SettingsPage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'general'; 
  
    const handleTabChange = (newTab: string) => {
      router.push(`?tab=${newTab}`);
    };
  
    useEffect(() => {
      if (!searchParams.get('tab')) {
        router.replace(`?tab=general`);
      }
    }, [router, searchParams]);
  
    return (
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <div className="w-full border-b border-[#E5E5E5]">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="general">General Settings</TabsTrigger>
            <TabsTrigger value="profile">Profile Settings</TabsTrigger>
            <TabsTrigger value="company">Company Settings</TabsTrigger>
            <TabsTrigger value="notification">Notification Setting</TabsTrigger>
            <TabsTrigger value="privacy_security">Privacy & Security</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="general">
          <GeneralSettings />
        </TabsContent>
        <TabsContent value="profile">
          <ProfileSettings />
        </TabsContent>
        <TabsContent value="company">
          <CompanySettings />
        </TabsContent>
        <TabsContent value="notification">
          <Notification />
        </TabsContent>
        <TabsContent value="privacy_security">
          <PrivacySecurity />
        </TabsContent>
      </Tabs>
    );
}

export default SettingsPage
