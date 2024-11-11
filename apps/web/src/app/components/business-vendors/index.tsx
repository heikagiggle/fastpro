import React from 'react';
import { ButtonComponent } from '../button';

const BusinessAndVendors = () => {
  return (
    <section className="bg-[#7209B70A] min-h-screen w-full" id="contact-us">
      <div className="2xl:mx-auto 2xl:w-[1400px] flex flex-col gap-y-40 w-full px-10 2xl:px-0 py-20">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[40%] lg:w-1/2 flex flex-col space-y-4">
            <p className="text-[#7209B7] font-medium">For Businesses</p>
            <p className="text-xl lg:text-3xl font-roobert-bold max-w-xl">
              Efficiently manage <br /> procurement by issuing RFPs <br /> and
              receiving competitive <br /> bids from a curated list of <br />{' '}
              vendors.
            </p>

            <p className="py-4 max-w-xl">
              Fastpro improves decision-making, saves time, and ensures you find
              the best vendors for your business needs.
            </p>

            <div className="flex justify-start">
              <ButtonComponent className="w-auto max-w-xs">
                {' '}
                Get started today
              </ButtonComponent>
            </div>
          </div>

          <div className="w-full md:w-[60%] lg:w-[40%] pt-14 md:pt-0">
            <div className="bg-white h-96"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[60%] lg:w-1/2 pt-14 md:pt-0">
            <div className="bg-white h-96"></div>
          </div>

          <div className="w-full md:w-[40%] lg:w-[40%] flex flex-col space-y-4">
            <p className="text-[#7209B7] font-medium">For Suppliers</p>
            <p className="text-xl lg:text-3xl font-roobert-bold max-w-xl">
            Expand your reach by <br /> connecting with businesses <br /> actively seeking your services.
            </p>

            <p className="py-4 max-w-xl">
            Our platform simplifies the RFP process, allowing you to submit competitive bids easily and increase your opportunities for business growth
            </p>

            <div className="flex justify-start">
              <ButtonComponent className="w-auto max-w-xs">
                {' '}
                Get started today
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAndVendors;
