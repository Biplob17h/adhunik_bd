import "./Home.css";
import Hero from "../../components/Hero/Hero";
import ServiceBanner from "./Services/ServiceBanner";
import Value from "../../components/Value/Value";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <main>
      <Hero/>
      <ServiceBanner/>
      <Value/>
      <Contact/>
      {/* <HomeAbout></HomeAbout>
      <HomeNumberSection></HomeNumberSection>
      <HomeHowItWorks></HomeHowItWorks>
      <Customers></Customers>
      <RequestService></RequestService> */}
    </main>
  );
};

export default Home;
