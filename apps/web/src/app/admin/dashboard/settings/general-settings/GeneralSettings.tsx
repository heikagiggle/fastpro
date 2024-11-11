'use client';
import { useState } from 'react';
import Menu from '../components/Menu';
import RegionalPreference from './RegionalPreference';
import ThemeOptions from './ThemeOptions';

import { Globe } from '../../../components/icons/globe';
import { Sun } from '../../../components/icons/sun';

const GeneralSettings = () => {
  const [activeItem, setActiveItem] = useState(1);

  const menuItems = [
    { id: 1, name: 'Regional Preferences', icon: Globe },
    { id: 2, name: 'Theme Options', icon: Sun },
  
  ];

  const handleSelect = (id: number) => {
    setActiveItem(id);
  };
  return (
    <div className="flex gap-x-12 my-6">
      <div>
        {' '}
        <Menu
          items={menuItems}
          activeItem={activeItem}
          onSelect={handleSelect}
        />
      </div>

      <div>
        {activeItem === 1 && (
          <div>
            <RegionalPreference />
          </div>
        )}
        {activeItem === 2 && (
          <div>
            <ThemeOptions />
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneralSettings;
