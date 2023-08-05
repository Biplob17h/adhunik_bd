import React from "react";
import { apple, facebook, google, instagram, linkedin } from "../../assets/Callback";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-[1140px] mx-auto  pt-20 flex">
        <div className="w-7/12 flex justify-between">
          <div>
            <h1 className="text-lg font-bold">CONTACT</h1>
            <div className="text-[19px] mt-5 ">
              <p>16516</p>
              <p>info@adhunikbd.xyz</p>
            </div>
            <div className="text-[19px] mt-5 ">
              <p className="font-semibold">Corporate Address</p>
              <p>House 454, Road No: 31,</p>
              <p>Mohakhali DOHS, Dhaka</p>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">OTHER PAGES</h1>
            <div className="mt-4">
              <h1 className="text-[19px] ">Blog</h1>
              <h1 className="text-[19px] mt-2">Help</h1>
              <h1 className="text-[19px] mt-2">Terms of use</h1>
              <h1 className="text-[19px] mt-2">Privacy Policy</h1>
              <h1 className="text-[19px] mt-2">Sitemap</h1>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold">COMPANY</h1>
            <div className="mt-4">
              <h1 className="text-[19px] ">sManager</h1>
              <h1 className="text-[19px] mt-2">sBusiness</h1>
              <h1 className="text-[19px] mt-2">sDelivery</h1>
              <h1 className="text-[19px] mt-2">sBondhu</h1>
            </div>
          </div>
        </div>
        <div className="w-5/12 text-right">
          <h1 className="text-lg font-bold">DOWNLOAD OUR APP</h1>
          <p className="text-[18px] mt-4">
            Tackle your to-do list wherever you are <br /> with our mobile app &
            make your life <br /> easy.
          </p>
          <div className="flex justify-end mt-4">
            <img className="w-[170px] mr-3 cursor-pointer" src={apple} alt="" />
            <img className="w-[170px] cursor-pointer" src={google} alt="" />
          </div>
          <div className="flex justify-end mt-5">
            <img className="mr-4 cursor-pointer" src={facebook} alt="" />
            <img className="mr-4 cursor-pointer" src={linkedin} alt="" />
            <img className="cursor-pointer" src={instagram} alt="" />
          </div>
        </div>
      </div>
      <div className="mt-5 bg-[rgba(0,0,0,.05)] h-[70px] text-center pt-6">
        <h1 className="text-[18px]">
          Copyright © 2023 Sheba Platform Limited | All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
