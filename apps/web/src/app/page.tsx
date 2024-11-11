import { Banner } from './components/banner';
import { FastproSteps } from './components/fastpro-steps';
import { Footer } from './components/footer';
import { WhyChooseUS } from './components/why-us';
import { Navigation } from './components/navigation';
import { AboutFastPro } from './components/about-fastpro';
import BusinessAndVendors from './components/business-vendors';
import Cta from './components/cta';

function Page() {
  return (
    <div className="bg-white">
      <Navigation />
      <Banner />
      <AboutFastPro />
      <WhyChooseUS />
      <BusinessAndVendors />
      <FastproSteps />
      <Cta />
      <Footer />
    </div>
  );
}

export default Page;
