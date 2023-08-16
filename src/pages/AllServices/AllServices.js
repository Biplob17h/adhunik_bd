import React from "react";
import "./AllServices.scss";
import AllServiceCard from "./AllServiceCard/AllServiceCard";
import Refrigerator from "./Refrigerator/Refrigerator";
import AcServiceCard from "./AcServiceCard/AcServiceCard";
const AllServices = () => {
  return (
      <div className="flex flex-col items-start 2xl:max-w-[1100px] m-auto justify-start s-container mt-24 relative">
        {/* all services title */}
      <span className="text-4xl font-semibold">All Services</span>
      {/* 2 side div */}
      <div className="flex flex-row items-start justify-start mt-10 w-full">
        {/* button div for services */}
        <div className="flex flex-col items-start justify-start s-left">          
          <a href="">AC Servicing</a>
          <a href="">Refrigerator</a>
          <a href="">Microwave</a>
          <a href="">Washing Machine</a>
          <a href="">IPS</a>
          <a href="">Treadmill</a>
          <a href="">Kitchen Hood</a>
          <a href="">Electric Geyser</a>
          <a href="">Gas Stove/Burner</a>
          <a href="">Desktop</a>
          <a href="">Laptop</a>
          <a href="">CCTV</a>
          <a href="">Solar Panel</a>
          <a href="">Cleaning</a>
          <a href="">Pest Control</a>
        </div>
        {/* services details div */}
        <div className="s-right pl-10">
          <AcServiceCard/>
          <AllServiceCard />
          <AllServiceCard />
          <AllServiceCard />
          <Refrigerator />
        </div>
      </div>
    </div>
  );
};

export default AllServices;
