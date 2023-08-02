import React from "react";
import { location, webIcon } from "../../assets/Callback";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar bg-white justify-between px-20">
      <div className="">
        <img src={webIcon} alt="" />
      </div>
      <div>
        <div className="flex items-center cursor-pointer">
          <img src={location} alt="" />
          <h1 className="text-lg">Location</h1>
        </div>
        <div className="border-2 rounded-lg ml-5 flex items-center w-[500px] relative">
          <input
            type="text"
            placeholder="Find your service here e.g. AC, Car, Facial …"
            className="input rounded-lg w-[500px] text-lg"
          />
          <div>
            <AiOutlineSearch
              className="bg-[#C71F66] text-white p-2 rounded-md mr-5 absolute bottom-[6px] right-0 cursor-pointer"
              size={35}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Link className="text-[18px] font-semibold">All Services</Link>
        <Link className="text-[18px] font-semibold ml-10">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
