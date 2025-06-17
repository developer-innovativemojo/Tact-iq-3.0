
import Hero from "@/components/Home/Hero";
import Empower from "@/components/Home/Empower";
import Capabilities from "@/components/Home/Capabilities";
// import PastPerformance from "@/components/Home/PastPerformance";
// import { Process } from "@/components/Home/CardsStack";
import ContactUs from "@/components/ContactUs";
import CardsStack from "@/components/Home/CardsStack/CardsStack";


export default function Home() {
  return (
    <>
      <Hero />
      <Empower />
      <Capabilities />
      {/* <PastPerformance /> */}
      {/* <Process /> */}
      <CardsStack />
      <ContactUs />
    </>
  );
}
