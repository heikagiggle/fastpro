'use client';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { usePathname } from 'next/navigation';

import { DashboardIcon } from '../../icons/dashboard';
import { CubeIcon } from '../../icons/cube';
import { cn } from '@app/components/utils/cn';
import { IconProps } from '../../../../components/icons/types';
import { MoneyIcon } from '../../icons/money';
import { ReportIcon } from '../../icons/report';
import { SupportIcon } from '../../icons/support';
import { SettingsIcon } from '../../icons/setting';
import { Synergy } from '../../../../components/icons/synergy';
import Image from 'next/image';
import { ForwardArrowIcon } from '../../icons/front-arrow';
import { ReceivableIcon } from '../../icons/receivable';

interface NavItem {
  url: string;
  Logo: FC<IconProps>;
  label: string;
}

const VendorSidebar = () => {
  const pathName = usePathname();

  const mainMenuItems: NavItem[] = useMemo(
    () => [
      { url: '/vendor/dashboard/', Logo: DashboardIcon, label: 'Dashboard' },
      {
        url: '/vendor/dashboard/rfp-management/',
        Logo: CubeIcon,
        label: 'RFP Management',
      },
      { url: '/vendor/dashboard/my-proposal/', Logo: MoneyIcon, label: 'My Proposal' },
      { url: '/vendor/dashboard/projects/', Logo: CubeIcon, label: 'Projects' },
      {
        url: '/vendor/dashboard/account-receivable/',
        Logo: ReceivableIcon,
        label: 'Account Receivable',
      },
      {
        url: '/vendor/dashboard/virtual-accounts/',
        Logo: MoneyIcon,
        label: 'Virtual Accounts',
      },
      { url: '/vendor/dashboard/reports/', Logo: ReportIcon, label: 'Reports' },
    ],
    []
  );

  const bottomMenuItems: NavItem[] = useMemo(
    () => [
      {
        url: '/vendor/dashboard/settings/',
        Logo: SettingsIcon,
        label: 'Settings',
      },
    //   { url: '/vendor/dashboard/support/', Logo: SupportIcon, label: 'Support' },
    ],
    []
  );

  const active = useMemo(() => {
    let active = null;
    const allItems = [...mainMenuItems, ...bottomMenuItems];
    for (const item of allItems) {
      if (pathName.startsWith(item.url)) active = item.url;
    }
    return active;
  }, [pathName, mainMenuItems, bottomMenuItems]);

  return (
    <div className="flex flex-col px-5 py-8 sm:w-[30%] md:w-[25%] lg:w-[15%] h-screen fixed xs:hidden hide-scrollbar border-r border-[#E5E5E5]">
      <div className="flex gap-x-2 items-center mb-4 border-b border-[#E5E5E5] pb-2">
        <Synergy />
        <div>
          <h1 className="text-[#0D0D0D] font-medium">Synergy PLC</h1>
          <p>Fastpro</p>
        </div>
      </div>

      {/* Top-aligned main items */}
      <ul className="flex flex-col gap-y-2">
        {mainMenuItems.map((nav) => (
          <li
            key={nav.label}
            className={cn(
              ' hover:bg-pink-100 hover:bg-opacity-20 border-transparent duration-200 ease-out text-sm',
              active === nav.url
                ? '!bg-[#F2F2F2] rounded-sm border-l-4 border-[#7209B7]'
                : ''
            )}
          >
            <Link
              href={nav.url}
              className={cn(
                'grid gap-2 grid-cols-[1rem_minmax(10rem,_1fr)] items-center w-full text-[#666666] text-sm leading-6 px-2',
                active === nav.url && 'text-[#0D0D0D] font-medium '
              )}
            >
              <nav.Logo
                className="w-5"
                primaryColor={active === nav.url ? '#7209B7' : ' #666666'}
              />
              <span className="p-1">{nav.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Spacer to push bottom items to the bottom */}
      <div className="flex-grow" />

      {/* Bottom-aligned items */}
      <ul className="flex flex-col gap-y-2">
        {bottomMenuItems.map((nav) => (
          <li
            key={nav.label}
            className={cn(
              'xl:w-4/5 hover:bg-pink-100 hover:bg-opacity-20 border-transparent duration-200 ease-out text-sm ',
              active === nav.url
                ? '!bg-[#F2F2F2] rounded-sm border-l-4 border-[#7209B7]'
                : ''
            )}
          >
            <Link
              href={nav.url}
              className={cn(
                'grid gap-2 grid-cols-[1rem_minmax(10rem,_1fr)] items-center w-full text-[#666666] hover:text-opacity-70 text-sm leading-6 px-2',
                active === nav.url && 'text-[#0D0D0D] '
              )}
            >
              <nav.Logo
                className="w-5"
                primaryColor={active === nav.url ? '#7209B7' : ' #666666'}
              />
              <span className="p-1">{nav.label}</span>
            </Link>
          </li>
        ))}{' '}
        <div className="flex gap-x-3 py-3 items-center">
          <div>
            <Image src={'/avatar.png'} alt="profile" width={150} height={150} />
          </div>

          <div>
            <p className="font-medium">Sophia Williams</p>
            <p className="text-xs text-[#666666]">sophia@synergyplc.com</p>
          </div>
          <div>
            <ForwardArrowIcon />
          </div>
        </div>
      </ul>
    </div>
  );
};

export default VendorSidebar;
