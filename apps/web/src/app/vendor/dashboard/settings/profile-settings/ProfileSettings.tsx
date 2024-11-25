'use client';
import { useState } from 'react';
import Menu from '../components/Menu';
import Profile from './Profile';
import ContactInfo from './ContactInfo';
import { ContactInfo as ContactInfoIcon } from '../../../components/icons/contact-info';
import { MiniProfileIcon } from '../../../../components/icons/mini-profile';

const ProfileSettings = () => {
  const [activeItem, setActiveItem] = useState(1);

  const menuItems = [
    { id: 1, name: 'Profile Settings', icon: MiniProfileIcon },
    { id: 2, name: 'Contact Information', icon: ContactInfoIcon },
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
            <Profile />
          </div>
        )}
        {activeItem === 2 && (
          <div>
            <ContactInfo />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileSettings;
