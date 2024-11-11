'use client';
import { useState } from 'react';
import Menu from '../components/Menu';
import { Building } from '../../../components/icons/building';
import { ContactInfo as ContactInfoIcon } from '../../../components/icons/contact-info';
import ContactInfo from './ContactInfo';
import CompanyInfo from './CompanyInfo';

const CompanySettings = () => {
  const [activeItem, setActiveItem] = useState(1);

  const menuItems = [
    { id: 1, name: 'Company Settings', icon: Building },
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
            <CompanyInfo />
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

export default CompanySettings;
