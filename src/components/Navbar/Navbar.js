import React, { useContext, useEffect, useState } from "react";
import { location, webIcon } from "../../assets/Callback";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import Login from "../Login/Login";
import { RiSearchLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
const Navbar = () => {
 
  // for scroll start
  // const [nav, setNav] = useState(0);
  // const [show, setShow] = useState(false);
  // console.log(show);
  // const scroll = () => {
  //   console.log(window.scrollY);
  //   if (window.scrollY > 270) {
  //     setShow(true);
  //   } else {
  //     setShow(false);
  //   }
  //   setNav(window.scrollY);
  // };
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  // useEffect(() => {
  //   window.addEventListener("scroll", scroll);
  //   return () => {
  //     window.removeEventListener("scroll", scroll);
  //   };
  // }, [nav]);
  // for scroll end
  return (
    <div className="w-full h-20 flex items-center justify-between gap-x-3 border-b border-white p-2 xl:max-w-[70%] mx-auto">
      <div className="w-full flex items-center border border-white bg-[#E7E7E7] rounded-full h-full p-1">
        
        <input
          type="text"
          name=""
          id=""
          className="bg-[#E7E7E7] outline-none pl-5 w-full border-2"
        />
        <button className="bg-black text-white h-full px-12 rounded-full flex items-center gap-x-3">
          Search <RiSearchLine size={24} />
        </button>
      </div>
      <div className="h-full flex items-center gap-x-3">
        <div className="h-full flex gap-3">
          <button className="bg-white rounded-full w-28 h-full">Sell</button>
          <button className="bg-white rounded-full w-28 h-full">App</button>
        </div>
        <button className="h-full w-16 rounded-full bg-white flex items-center justify-center">
          <FaHeart size={20} color="red" />
        </button>
        <button className="h-full w-16 rounded-full bg-slate-500 flex items-center justify-center">
          <CiShoppingCart size={20} color="white" />
        </button>
        {/* toggle user and login */}
        
      </div>
    </div>
  );
};

export default Navbar;
