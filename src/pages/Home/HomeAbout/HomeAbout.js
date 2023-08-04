import React from "react";
import {
  gloves,
  mask,
  sanitized,
  usp_24_7,
  whyUs,
} from "../../../assets/Callback";

const HomeAbout = () => {
  return (
    <div className="max-w-[1140px] mx-auto mt-16 opacity-90">
      <div className="flex items-center">
        <div className="bg-black w-[50px] h-[1px]" />
        <h1 className="text-lg font-semibold pl-3">WHY CHOOSE US</h1>
      </div>
      <h1 className="text-4xl font-bold">
        Because we care about your safety..
      </h1>
      <div className="flex justify-between my-10 mb-20">
        <div className="w-5/12 grid grid-cols-2 gap-10">
          <div className="flex items-center">
            <img className="w-[50px] h-[50px]" src={mask} alt="" />
            <h1 className="text-lg font-bold ml-2">
              Ensuring <br /> Masks
            </h1>
          </div>
          <div className="flex items-center">
            <img className="w-[50px] h-[50px]" src={usp_24_7} alt="" />
            <h1 className="text-lg font-bold ml-2">
              24/7 <br /> Support
            </h1>
          </div>
          <div className="flex items-center">
            <img className="w-[50px] h-[50px]" src={sanitized} alt="" />
            <h1 className="text-lg font-bold ml-2">
              Sanitising Hands & Equipment
            </h1>
          </div>
          <div className="flex items-center">
            <img className="w-[50px] h-[50px]" src={gloves} alt="" />
            <h1 className="text-lg font-bold ml-2">
              Ensuring <br /> Gloves
            </h1>
          </div>
        </div>
        <div className="w-7/12">
          <img className="w-full h-[300px]" src={whyUs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
