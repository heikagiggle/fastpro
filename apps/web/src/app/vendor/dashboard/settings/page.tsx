import React from 'react'
import dynamic from 'next/dynamic'

const Settings = () => {
  const SettingsPage = dynamic(() => import('./SettingsPage'), { ssr: false })
  return (
    <div>
      <SettingsPage/>
    </div>
  )
}

export default Settings
