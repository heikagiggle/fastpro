import Link from 'next/link';
import React from 'react';
import Facebook from '../icons/facebook';
import Instagram from '../icons/instagram';
import { FaXTwitter } from 'react-icons/fa6';
import { Synergy } from '../icons/synergy';
import LinkedIn from '../icons/linkedin';
import Youtube from '../icons/youtube';

export function Footer() {
  return (
    <footer className="bg-[#F5F5F5] pt-10 pb-6 text-[#181818]">
      <div className=" mx-auto md:px-10 px-5">
        <div className="flex flex-col gap-y-5 ">
          {/* logo */}
          <div className="flex flex-col lg:flex-row  gap-y-12 lg:gap-y-0 lg:justify-between">
            <Link href={'/'}>
              <div className="flex lg:justify-start ">
                <Synergy />
              </div>
            </Link>

            <div className="lg:text-left">
              <p className="text-sm mb-2">Terms & Conditions</p>
              <p className="text-sm text-[#18181866]">Privacy policy</p>
              <p className="text-sm text-[#18181866]">Contact us</p>
            </div>

            <div className="lg:text-left text-[#181818]">
              <p className="text-sm">
                © 2024 Fastpro <br /> all rights reserved
              </p>
            </div>
          </div>

          <ul className="flex space-x-4 items-center pt-5">
            <li>
              <Link href="https://x.com/Healthpaddyng">
                <FaXTwitter color="black" size={24} />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=61560819501680">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=61560819501680">
                <LinkedIn />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=61560819501680">
                <Youtube />
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/healthpaddyng?igsh=MTV6Nmx3YzNna3Vpcg%3D%3D&utm_source=qr">
                <Instagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
