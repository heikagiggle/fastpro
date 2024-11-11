
import { cn } from '@app/components/utils';
import { coreValues } from './constants';

export function AboutFastPro({ className }: { className?: string }) {
  return (
    <section className={cn('bg-white w-full', className)} id="contact-us">
      <div className="2xl:mx-auto 2xl:w-[1400px] w-full px-10 2xl:px-0 py-20">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[40%] lg:w-[30%]">
            <p className="text-xl lg:text-3xl lg:mt-20 mb-2 font-roobert-bold">
              FastPro is a digital ecosystem that connects businesses with a
              network of verified service providers and vendors.
            </p>

            <p className="py-4">
              Our platform empowers businesses to find the right suppliers,
              compare options, and make data-driven informed purchasing
              decisions – all while optimizing operational efficiency and
              reducing costs.
            </p>
          </div>
          <div className="w-full md:w-[60%] lg:w-[40%] pt-14 md:pt-0"></div>
        </div>

        <div className="flex flex-wrap w-full my-20">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden w-full lg:w-[350px] flex flex-col pt-3 "
            >
              <div className="flex p-5 flex-grow cursor-pointer">
                <div className="bg-[#7209B7] w-1 h-6 mr-2 mt-1"></div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-4 font-bold text-[#181818]">
                    {value.title}
                  </h3>
                  <p className=" text-[#181818] pb-4">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
