import dynamic from 'next/dynamic';

const SettingsPage = dynamic(() => import('./SettingsPage'), { ssr: false });

const Settings = () => {
  return (
    <div>
      <SettingsPage />
    </div>
  );
};

export default Settings;
