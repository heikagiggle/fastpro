import { Card } from './card';
import { Mail } from './icons/mail';

export function WhyChooseUS() {
  return (
    <section className="bg-[#FBFBFB] min-h-screen py-20">
      <p className="text-3xl lg:text-3xl md:px-20 px-10 font-roobert-semi-bold">
        Why Choose Fastpro?
      </p>
      <div className="flex flex-col md:hidden px-10 md:px-20 pb-10">
        <Card heading="Effortless RFP Issuance" className="mt-8 lg:mt-4">
          Easily issue RFPs to a diverse range of vendors within the Fastpro
          marketplace
        </Card>
        <Card heading="Bid Management" className="mt-8 lg:mt-4">
          Receive and manage bids from vendors seamlessly, ensuring a
          straightforward selection process
        </Card>

        <Card heading="Enhanced Visibility" className="mt-8 lg:mt-10">
          Increase your business’s visibility among potential vendors and
          customers, creating new opportunities for growth
        </Card>

        <Card heading="Data-Driven Insights" className="mt-8 lg:mt-[3rem]">
          Utilize our robust data analytics to make informed decisions based on
          performance metrics and vendor profiles
        </Card>
      </div>

      <div className="px-10 md:px-20 2xl:w-[1400px] 2xl:mx-auto py-14 lg:mt-0 hidden md:flex md:flex-row justify-between">
        <div className="w-full md:w-[48.5%]">
          <Card heading="Effortless RFP Issuance" className="mt-8 lg:mt-4">
            Easily issue RFPs to a diverse range of vendors within the Fastpro
            marketplace
          </Card>

          <Card heading="Data-Driven Insights" className="mt-8 lg:mt-[3rem]">
            Utilize our robust data analytics to make informed decisions based
            on performance metrics and vendor profiles
          </Card>
        </div>
        <div className="w-full md:w-[48.5%] mt-[6rem]">
          <Card heading="Bid Management" className="mt-8 lg:mt-4">
            Receive and manage bids from vendors seamlessly, ensuring a
            straightforward selection process
          </Card>
          <Card heading="Enhanced Visibility" className="mt-8 lg:mt-10">
            Increase your business’s visibility among potential vendors and
            customers, creating new opportunities for growth
          </Card>
        </div>
      </div>
    </section>
  );
}
