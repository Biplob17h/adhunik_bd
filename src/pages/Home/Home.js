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
    </div>
  );
};

export default Home;
