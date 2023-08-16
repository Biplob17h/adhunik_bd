import React, { useEffect, useState } from "react";
import { location } from "../../../assets/Callback";
import { AiOutlineSearch } from "react-icons/ai";
import LocationDetails from "./LocationDetails/LocationDetails";

const Bannar = () => {
  // for scroll start
  const [nav, setNav] = useState(0);
  const [show, setShow] = useState(false);
  console.log(show);
  const scroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 270) {
      setShow(true);
    } else {
      setShow(false);
    }
    setNav(window.scrollY);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, [nav]);
  // for scroll end
  return (
    <div className="h-[70vh]  cuHomeBannar mt-[75px]  -z-30">      
      <div className="max-w-[1140px] mx-auto text-center text-white ">
        <h1 className="text-6xl font-bold pt-32 ">Your Personal Assistant</h1>
        <h2 className="text-3xl font-bold pt-6">
          One-stop solution for your services. Order any service, anytime.
        </h2>
        <div
          className={`flex justify-center pt-10 ${show ? "hidden" : "flex"}`}>
          <div className="flex items-center cursor-pointer bg-white text-[#323334] p-2 rounded-md">
            <img src={location} alt="" />
            <h1 className="text-lg">Location</h1>
          </div>
          <div className="border-2 rounded-lg ml-5 flex items-center w-[500px] relative bg-white">
            <input
              type="text"
              placeholder="Find your service here e.g. AC, Car, Facial …"
              className="input rounded-lg w-[500px] text-lg text-[#323334]"
            />
            <div>
              <AiOutlineSearch
                className="bg-[#C71F66] text-white p-2 rounded-md mr-5 absolute bottom-[6px] right-0 cursor-pointer"
                size={35}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
