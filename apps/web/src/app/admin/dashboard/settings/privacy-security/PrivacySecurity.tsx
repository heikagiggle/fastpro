'use client';
import { useState } from 'react';
import Menu from '../components/Menu';
import { Locked } from '../../../../components/icons/locked';
import { PrivacySecurityIcon } from '../../../components/icons/security';
import ChangePassword from './ChangePassword';
import Security from './Security';
import DeleteAccount from './DeleteAccount';
import { DeleteIcon } from '../../../../components/icons/delete';

const PrivacySecurity = () => {
  const [activeItem, setActiveItem] = useState(1);

  const menuItems = [
    { id: 1, name: 'Change Password', icon: Locked },
    { id: 2, name: '2fa Security', icon: PrivacySecurityIcon },
    { id: 3, name: 'Delete Account', icon: DeleteIcon },
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
            <ChangePassword />
          </div>
        )}
        {activeItem === 2 && (
          <div>
            <Security />
          </div>
        )}
        {activeItem === 3 && (
          <div>
            <DeleteAccount />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivacySecurity;
