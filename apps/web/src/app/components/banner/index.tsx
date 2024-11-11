'use client';
import Link from 'next/link';
import { ButtonComponent } from '../button';

export function Banner() {
  return (
    <section
      className={
        'h-screen flex justify-between items-center bg-center bg-cover bg-[#7209B70A]'
      }
    >
      <div className="px-10 md:px-20 2xl:w-[1400px] ">
        <div className="flex items-baseline gap-2">
          <p className="text-2xl sm:text-3xl md:text-6xl lg:text-6xl font-roobert-semi-bold text-[#473552]">
          Fastpro <br /> Your Gateway to <br /> <span className='text-[#7209B7] italic'>Seamless </span> Business <br /> Connections
          </p>
        </div>

        <p className="max-w-[65ch] mt-5 lg:mt-7 text-md md:text-lg lg:text-lg font-rethink-sans-regular text-[#0D0D0D] font-[500]">
          Connecting Businesses and vendors for Smarter Sourcing <br /> and Cost
          Savings.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-10">
          <Link href={'/admin/login'}>
            <ButtonComponent className="flex justify-center w-full">
              For Businesses
            </ButtonComponent>
          </Link>

          <Link href={'/vendor/login'}>
            <ButtonComponent inverse className="flex justify-center w-full">
              For vendors
            </ButtonComponent>
          </Link>
        </div>
      </div>
    </section>
  );
}
