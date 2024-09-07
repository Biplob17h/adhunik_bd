import "./Home.css";
import Hero from "../../components/Hero/Hero";
import ServiceBanner from "./Services/ServiceBanner";

const Home = () => {
  return (
    <main>
      <Hero/>
      <ServiceBanner/>
      {/* <HomeAbout></HomeAbout>
      <HomeNumberSection></HomeNumberSection>
      <HomeHowItWorks></HomeHowItWorks>
      <Customers></Customers>
      <RequestService></RequestService> */}
    </main>
  );
};

export default Home;
