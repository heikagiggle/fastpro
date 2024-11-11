'use client';

import Link from 'next/link';
import { useState } from 'react';

import { ButtonComponent } from '../button';
import { CloseMenu } from './close';
import { Menu } from './menu';
import { Synergy } from '../icons/synergy';

export function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="py-5 w-full border-b border-[lightgray] fixed z-20"
      style={{ background: 'rgba(255, 255, 255, 0.9)' }}
    >
      <div className="px-10 md:px-20 2xl:px-0 2xl:w-[1400px] 2xl:mx-auto flex justify-between">
        <div className="flex gap-x-2">
          <div>
            <Synergy />
          </div>
          <Link href={'/'}>
            <p className="font-[600] text-xl mt-2 font-roobert-semi-bold">
              FastPro
            </p>
          </Link>
        </div>

        <div className="hidden md:flex gap-4 items-center text-sm md:text-base text-[#0D0D0D] font-sans font-semibold">
          <ul className="flex gap-4">
            <li>
              <Link href={'/rfp-gallery'}>RFP Gallery</Link>
            </li>
            <li>
              <a href={'customers'}>Customers</a>
            </li>
            <li>
              <Link href={'/'}>Contact</Link>
            </li>
          </ul>

          <Link href={'/get-started/'}>
            <ButtonComponent>Get started</ButtonComponent>
          </Link>
        </div>

        <button className="block md:hidden" onClick={() => setOpen(!open)}>
          {open ? <CloseMenu /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="absolute px-10 bg-white w-full py-4 block shadow-sm mx-10 md:hidden z-50">
          <div className="bg-white w-full">
            <ul className="flex flex-col gap-y-2">
              <li>
                <Link href={'/rfpgallery'}>RFP Gallery</Link>
              </li>
              <li>
                <a href={'customers'}>Customers</a>
              </li>
              <li>
                <Link href={'/'}>Contact</Link>
              </li>
            </ul>

            <div className="px-10">
              <Link href={'/get-started/'}>
                <ButtonComponent
                  withArrow
                  className="w-full flex justify-center"
                >
                  Get started
                </ButtonComponent>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
