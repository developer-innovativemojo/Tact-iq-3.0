
import Hero from "@/components/Home/Hero";
import Empower from "@/components/Home/Empower";
import Capabilities from "@/components/Home/Capabilities";
import PastPerformance from "@/components/Home/PastPerformance";
// import { Process } from "@/components/Home/CardsStack";
import ContactUs from "@/components/Home/ContactUs";
import CardsStack from "@/components/Home/CardsStack/CardsStack";
import CapabilitiesSlider from "@/components/Home/Capabilities/CapabilitiesSlider";
import ProjectsSlider from "@/components/Home/CardsStack/MobSlider";


export default function Home() {
  return (
    <>
      <Hero />
      <Empower />
      <Capabilities />
      <CapabilitiesSlider />
      <PastPerformance />
      <ProjectsSlider />
      {/* <Process /> */}
      <CardsStack />
      <ContactUs />
    </>
  );
}
