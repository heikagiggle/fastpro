
export function FastproSteps() {
  return (
    <section id="book-consultation" className="bg-[#FDF9F5]">
      <div className="px-10 md:px-20 2xl:px-0 2xl:mx-auto 2xl:w-[1400px] py-20">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] lg:w-[80%]">
            <div className="w-full md:w-[90%] xl:w-[85%] rounded-lg bg-[#EEEEEE] h-[500px] lg:h-[450px] xl:h-[455px] relative"></div>
          </div>
          <div className="w-full md:w-[40%] lg:w-[20%] h-full">
            <div className="flex flex-col gap-y-4">
              <div>
                <h3 className="font-semibold text-[#181818] text-base py-2">
                  Create an RFP
                </h3>
                <p>
                  Businesses can easily create and post Requests for Proposals
                  (RFPs) within the platform, specifying their requirements,
                  deadlines, and project details.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#181818] text-base py-2">
                  Vendors Submit Bids
                </h3>
                <p>
                  Qualified vendors browse open RFPs and submit their proposals
                  and portfolios
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#181818] text-base py-2">
                  Compare Proposals
                </h3>
                <p>
                  Businesses receive multiple bids, which can be compared
                  side-by-side based on predefined criteria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
