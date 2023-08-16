import React from "react";
import { AiFillStar } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import "./FixedServiceCard.scss";
import ServiceModal from "./ServiceModal";
const FixedServiceCard = () => {
  return (
    <>
    <ServiceModal/>
    <div className="fixed top-1/4 right-8 z-50 rounded-md p-10 f-container">
      <div className="flex flex-col items-start justify-start gap-3 text-white">
        <span className="text-2xl font-bold text-white pr-16">
          Personal Beauty Care
        </span>
        <div className="flex flex-row items-center justify-center gap-1 bg-slate-400 p-3 rounded-md">
          <AiFillStar size={30} />
          <span className="text-2xl font-semibold">4.75</span>
          <span className="text-lg font-medium">out of 5</span>
        </div>
        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <button
            className="bg-white text-black w-full py-4 text-sm font-semibold rounded-md flex items-center justify-between px-5"
            onClick={() => window.servicemodal.showModal()}
          >
            Facial For Women
            <MdKeyboardArrowRight size={24} color="red" />
          </button>
          <button className="bg-white text-black w-full py-4 text-sm font-semibold rounded-md flex items-center justify-between px-5">
            Facial For Women
            <MdKeyboardArrowRight size={24} color="red" />
          </button>
          <button className="bg-white text-black w-full py-4 text-sm font-semibold rounded-md flex items-center justify-between px-5">
            Facial For Women
            <MdKeyboardArrowRight size={24} color="red" />
          </button>
          <button className="bg-white text-black w-full py-4 text-sm font-semibold rounded-md flex items-center justify-between px-5">
            Facial For Women
            <MdKeyboardArrowRight size={24} color="red" />
          </button>
          <button className="bg-white text-black w-full py-4 text-sm font-semibold rounded-md flex items-center justify-between px-5">
            Facial For Women
            <MdKeyboardArrowRight size={24} color="red" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto pt-5">
          <Link className="text-sm font-semibold text-center">
            View all 9 services
          </Link>
          <div className="border border-dotted border-slate-700 w-full"></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FixedServiceCard;
