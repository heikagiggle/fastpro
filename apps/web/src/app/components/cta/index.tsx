import React from 'react';
import { ButtonComponent } from '../button';
import { cn } from '@app/components/utils';
import Link from 'next/link';

const Cta = () => {
  return (
    <section
      className={cn(
        'w-full min-h-screen flex items-center justify-center bg-center bg-cover my-10',
        'bg-[url(https://files.skillpaddy.com/public/image/fastpro-bg-1729686647995.png)]'
      )}
      id="contact-us"
    >
      <div className="2xl:mx-auto 2xl:w-[1400px] flex flex-col gap-y-40 w-full px-10 2xl:px-0">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="w-full md:w-[40%] lg:w-1/2 flex flex-col space-y-4">
            <p className=" font-medium">Join Fastpro today</p>
            <p className="text-xl lg:text-3xl font-roobert-bold max-w-xl">
              Ready to enhance your business connections?
            </p>

            <p className="py-4">
              Join Fastpro today and unlock the potential of streamlined RFP
              management!
            </p>
          </div>

          <div className="w-full md:w-[60%] lg:w-[40%] pt-14 md:pt-0">
            <div className="flex justify-center gap-x-6">
              <Link href={'/admin/login'}>
                <ButtonComponent className="w-auto max-w-xs">
                  For Business
                </ButtonComponent>
              </Link>

              <Link href={'/vendor/login'}>
                <ButtonComponent className="w-auto max-w-xs">
                  For Vendors
                </ButtonComponent>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
