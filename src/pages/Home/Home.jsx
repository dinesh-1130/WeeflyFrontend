import AfricanExperience from "./AfricanExperience_Section";
import AioSection from "./Aio_Section";
import TravelSection from "./ContactUs_Section";
import ExploreAfrica from "./ExploreAfrica_Section";
import HeroSection from "./Hero_section";
import OurStory from "./OurStory_Section";
import PaymentOptionSection from "./PaymentOption_Section";
import ServiceOfferedSection from "./ServiceOffered_Section";

function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceOfferedSection />
      <PaymentOptionSection />
      <AfricanExperience />
      <AioSection />
      <TravelSection />
      <ExploreAfrica />
      <OurStory />
    </div>
  );
}

export default Home;
