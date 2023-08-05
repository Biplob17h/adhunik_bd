import React from "react";
import "./AllServices.scss";
import AllServiceCard from "./AllServiceCard/AllServiceCard";
import Refrigerator from "./Refrigerator/Refrigerator";
const AllServices = () => {
  return (
    <div className="flex flex-col items-start 2xl:max-w-[1100px] m-auto justify-start s-container relative">
      {/* all services title */}
      <span className="text-4xl font-semibold">All Services</span>
      {/* 2 side div */}
      <div className="flex flex-row items-start justify-start mt-10 w-full">
        {/* button div for services */}
        <div className="flex flex-col items-start justify-start s-left">
          <a href="#ref" className="ease-in duration-500">
            AC repair
          </a>
          <a href="">Appliance Repair</a>
          <a href="">Painting & Renovation</a>
          <a href="">Trips & Travels</a>
          <a href="">Shifting</a>
          <a href="">Beauty & Salon</a>
          <a href="">Beauty & Salon</a>
          <a href="">Beauty & Salon</a>
          <a href="">Beauty & Salon</a>
          <a href="">Beauty & Salon</a>
          <a href="">Beauty & Salon</a>
        </div>
        {/* services details div */}
        <div className="s-right pl-10">
          <AllServiceCard />
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
