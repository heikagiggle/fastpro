'use client';
import { useState } from 'react';
import Menu from '../components/Menu';
import Preferences from './Preferences';
import Method from './Method';
import { EqualizerIcon } from '../../../components/icons/equalizer';
import { MethodIcon } from '../../../components/icons/methodicon';

const Notification = () => {
  const [activeItem, setActiveItem] = useState(1);

  const menuItems = [
    { id: 1, name: 'Preferences', icon: EqualizerIcon },
    { id: 2, name: 'Method', icon: MethodIcon },
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
            <Preferences />
          </div>
        )}
        {activeItem === 2 && (
          <div>
            <Method />
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;
