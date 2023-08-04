import React from "react";
import Bannar from "./Bannar/Bannar";
import "./Home.css";
import Categories from "./Categories/Categories";
import Emi from "./Emi/Emi";
import HomeService from "./HomeService/HomeService";
import Recently from "./Recently/Recently";
import Recommended from "./Recommended/Recommended";
import Trending from "./Trending/Trending";
import ForHome from "./ForHome/ForHome";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeNumberSection from "./HomeNumberSection/HomeNumberSection";
import HomeHowItWorks from "./HomeHowItWorks/HomeHowItWorks";
import Customers from "./Customers/Customers";

const Home = () => {
  return (
    <div className="home-containter relative">
      <Bannar></Bannar>
      <Categories></Categories>
      <Emi></Emi>
      <HomeService></HomeService>
      <Recently></Recently>
      <Recommended></Recommended>
      <Trending></Trending>
      <ForHome></ForHome>
      <HomeAbout></HomeAbout>
      <HomeNumberSection></HomeNumberSection>
      <HomeHowItWorks></HomeHowItWorks>
      <Customers></Customers>
    </div>
  );
};

export default Home;
