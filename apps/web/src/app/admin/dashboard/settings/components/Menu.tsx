import { FC } from 'react';
import { ArrowRight } from '../../../components/icons/arrow-right';
import { IconProps } from '../../../../components/icons/types';

type MenuItem = {
  id: number;
  name: string;
  icon: FC<IconProps>;
};

interface MenuProps {
  items: MenuItem[];
  activeItem: number;
  onSelect: (id: number) => void;
}

const Menu = ({ items, activeItem, onSelect }: MenuProps) => {
  return (
    <div className="w-[16.1rem] border flex flex-col border-[#E1E4EA] shadow-sm rounded-lg p-3">
      <p className="pb-3 text-xs text-[#666666]">SELECT MENU</p>
      {items.map((item) => (
        <div
          key={item.id}
          className={`flex items-center text-sm p-2 cursor-pointer ${
            activeItem === item.id
              ? 'bg-[#F2F2F2] font-medium rounded-lg text-sm'
              : 'text-[#666666]'
          }`}
          onClick={() => onSelect(item.id)}
        >
          <span className="mr-2">
            <item.icon
              primaryColor={activeItem === item.id ? '#7209B7' : ' #666666'} // Pass primary color based on activeItem
            />
          </span>

          <span>{item.name}</span>

          {activeItem === item.id && (
            <span className="ml-auto rounded-full bg-white p-0.5">
              <ArrowRight />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
