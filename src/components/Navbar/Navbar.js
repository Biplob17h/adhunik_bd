import React, { useEffect, useState } from "react";
import { location, webIcon } from "../../assets/Callback";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
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
    <div className="w-full mx-auto relative z-[99]">
      <div className="navbar bg-white  my-[6px] fixed top-0 mx-auto z-50 mt-0 ">
        <div className="max-w-[1140px] mx-auto ">
          <Link to='/' className={`${show ? "pr-[65px]" : "pr-[373px] my-2"}`}>
            <img className="w-[130px]" src={webIcon} alt="" />
          </Link>
          <div className={`${show ? "flex" : "hidden"}`}>
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
          <div
            className={`flex items-center ${
              show ? "ml-[70px]" : "pl-[378px]"
            }`}>
            <Link to="/allservices" className="text-[18px] font-semibold">
              All Services
            </Link>
            <Link className="text-[18px] font-semibold ml-10">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
