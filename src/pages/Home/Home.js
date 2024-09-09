import "./Home.css";
import Hero from "../../components/Hero/Hero";
import ServiceBanner from "./Services/ServiceBanner";
import Value from "../../components/Value/Value";
import Contact from "../../components/Contact/Contact";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
  return (
    <main className="relative">
      <div className="absolute w-[20rem] h-[20rem] rounded-[100px] bg-[rgba(255,255,255,0.522)] filter blur-[100px] z-20"/>
      <Hero/>
      <ServiceBanner/>
      <Value/>
      <Contact/>
      <Testimonials/>
      {/* <HomeAbout></HomeAbout>
      <HomeNumberSection></HomeNumberSection>
      <HomeHowItWorks></HomeHowItWorks>
      <Customers></Customers>
      <RequestService></RequestService> */}
    </main>
  );
};

export default Home;
