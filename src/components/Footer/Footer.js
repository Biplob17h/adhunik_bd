import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiBuildingOffice } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-slate-100 py-10">
      <div className="xl:max-w-[1200px] mx-auto flex gap-x-32">
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-2">
            <span className="text-[1.1rem] font-bold text-[#1f3e72]">
              contact
            </span>
            <span className="flex items-center gap-x-2 text-zinc-600 font-medium">
              <FaPhoneAlt className="text-blue-500 text-[1.2rem]" />
              +8801971455388
            </span>
            <span className="flex items-center gap-x-2 text-zinc-600 font-medium">
              <MdEmail className="text-blue-500 text-[1.2rem]" />
              info.adhunikbd@gmail.com
            </span>
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-[1.1rem] font-bold text-[#1f3e72]">
              address
            </span>
            <span className="flex items-center gap-x-2 text-zinc-600 font-medium">
              <HiBuildingOffice className="text-blue-500 text-[1.2rem]" />
              Shop-286/E, Boro Mogbazar, Dhaka 1217
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="text-[1.1rem] font-bold text-[#1f3e72]">pages</span>
          <ul className="text-zinc-600 font-medium flex flex-col gap-y-1">
            <li className="hover:underline hover:text-blue-500 cursor-pointer transition-colors">
              shop
            </li>
            <li className="hover:underline hover:text-blue-500 cursor-pointer transition-colors">
              services
            </li>
            <li className="hover:underline hover:text-blue-500 cursor-pointer transition-colors">
              about us
            </li>
            <li className="hover:underline hover:text-blue-500 cursor-pointer transition-colors">
              contact us
            </li>
            <li className="hover:underline hover:text-blue-500 cursor-pointer transition-colors">
              privacy policy
            </li>
            <li className="hover:underline hover:text-blue-500 cursor-pointer transition-colors">
              terms & condition
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <span className="text-[1.1rem] font-bold text-[#1f3e72]">
            follow us
          </span>
          <div className="flex items-center gap-x-3">
            <FaFacebook className="text-blue-500 text-[1.5rem] cursor-pointer" />
            <AiFillInstagram className="text-blue-500 text-[1.5rem] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
