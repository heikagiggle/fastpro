'use client';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { cn } from '@app/components/utils/cn';
import { BackArrowIcon } from '../../icons/back-arrow';
import { SearchIcon } from '../../icons/search';
import { NotificationIcon } from '../../icons/notification';
import { CartIcon } from '../../icons/cart';

const TopBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  console.log('Full pathname:', pathname);
  const address =
    pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') || '';

  console.log('Current address:', address);

  const [openProfile, setOpenProfile] = useState(false);

  const handleClick = () => setOpenProfile(!openProfile);

  const handleLogout = async () => router.push('/login');

  return (
    <div className="flex bg-white z-50 items-center justify-between mt-3 py-4 mx-[2rem] sticky top-0 pb-8">
      <div className="flex gap-x-2 items-center text-sm ">
        {address ? (
          <div className={cn('cursor-pointer')} onClick={() => router.back()}>
            <BackArrowIcon />
          </div>
        ) : null}

        <p className="font-semibold text-xl text-[#0D0D0D] capitalize">
          {address || ''}
        </p>
      </div>

      <div className="flex items-center justify-between gap-x-10">
        <div className=" cursor-pointer">
          <SearchIcon />
        </div>
        <div className=" cursor-pointer">
          <NotificationIcon />
        </div>
        <div className=" cursor-pointer">
          <CartIcon />
        </div>
        {/* <div
          className="flex items-center gap-[15px] cursor-pointer"
          onClick={handleClick}
        >
          {openProfile && (
            <div className="bg-white border text-sm absolute top-[45px] z-20 right-[-20px] p-4 mr-8 space-y-[10px]">
              <Link
                href="/dashboard/settings"
                className="cursor-pointer hover:text-red-500 font-semibold"
              >
                Settings
              </Link>
              <p
                className="cursor-pointer hover:text-red-500 font-semibold"
                onClick={handleLogout}
              >
                Log out
              </p>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default TopBar;
