import React from "react";
import { serviceRequest } from "../../../assets/Callback";
import {MdLocalPhone} from 'react-icons/md'

const RequestService = () => {
  return (
    <div className="w-full bg-[#f4f5f8] text-[#212529] h-[170px] mt-60 relative">
      <div className="max-w-[1140px] mx-auto ">
        <div className="flex justify-between">
          <div className="w-8/12 ">
            <h1 className="font-semibold text-[28px] pt-5">
              Can’t find your desired service? Let us know 24/7 in 16516.
            </h1>
            <div className="mt-6 flex">
              <button className="p-4 rounded-md text-xl font-semibold text-white bg-[#C71F66]  w-[210px]">
                Request a service
              </button>
              <button className="btn btn-ghost h-[60px] text-xl font-semibold text-[#C71F66] bg-transparent ml-5 flex items-center w-[210px] hover:text-white hover:bg-[#C71F66] cuBorderforHomeButton">
                <MdLocalPhone className="-ml-8" />{" "}
                <span className="ml-5">16516</span>
              </button>
            </div>
          </div>
         
          <div className="w-4/12  ">
            <img
              className="absolute bottom-0  ml-9"
              src={serviceRequest}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestService;


