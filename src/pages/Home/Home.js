import React from "react";

import Bannar from "./Bannar/Bannar";
import "./Home.css";
import Categories from "./Categories/Categories";
import Emi from "./Emi/Emi";
import HomeService from "./HomeService/HomeService";
import Recently from "./Recently/Recently";
import Recommended from "./Recommended/Recommended";
import Trending from "./Trending/Trending";
import ForHome from "./ForHome/ForHome";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeNumberSection from "./HomeNumberSection/HomeNumberSection";
import HomeHowItWorks from "./HomeHowItWorks/HomeHowItWorks";
import Customers from "./Customers/Customers";
import RequestService from "./RequestService/RequestService";
import { CiShoppingCart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdDiscount } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
const btns = [
  "Sofa",
  "Table",
  "Dressers",
  "Chair",
  "Bed",
  "Lamps",
  "Speakers",
  "Lamps",
];
const Home = () => {
  return (
    <div className="home-containter relative">
      {/* categories content */}
      <div className="w-full pt-5 xl:max-w-[70%] mx-auto xl:px-0 px-10">
        {/* categories */}
        <div className="w-full h-10 flex items-center gap-5 xl:text-base lg:text-xs">
          <h1 className="text-xl">Categories</h1>
          <div className="w-full h-full flex items-center justify-between gap-2">
            {btns.map((btn, i) => {
              return (
                <button
                  key={i}
                  className="h-full w-full rounded-lg bg-[#EFEFEF] border border-white flex items-center justify-center"
                >
                  {btn}
                </button>
              );
            })}
          </div>
        </div>
        {/* categories content */}
        <div className="w-full flex py-5 gap-2">
          {/* new deals */}
          <div
            className="w-[40%] h-[600px] border border-white rounded-3xl flex flex-col justify-between px-3 py-3 bg-center"
            style={{
              backgroundImage: `url(${"https://th.bing.com/th/id/R.f31be3d51071badd8f7f7281358d839d?rik=hskbpfrpipe3ZQ&riu=http%3a%2f%2fwww.architectureartdesigns.com%2fwp-content%2fuploads%2f2019%2f05%2fwhite-sofa-7.jpg&ehk=hefOqyndjJ5EnssetbNZL6lW5LWdDZ73FtHRuW5LPZ4%3d&risl=&pid=ImgRaw&r=0"})`,
            }}
          >
            <h1 className="text-4xl font-medium pl-10 pt-5">New Deals</h1>
            {/* middle part */}
            <div
              className="flex flex-col justify-between w-full h-[300px] mx-auto rounded-3xl bg-center glassEffect"
              style={{
                backgroundImage: `url(${"https://i.postimg.cc/k59BVp74/512daf0bec0b5b394a06d8a030807afd-removebg-preview.png"})`,
              }}
            >
              <div className="w-full h-full p-2 flex justify-between pr-5">
                <div className="pl-7 pt-4 flex flex-col gap-3">
                  <h1 className="text-4xl font-medium">$508</h1>
                  <h1 className="text-xl font-medium">Long Chair</h1>
                </div>
                <button className="h-16 w-24 rounded-full bg-white flex items-center justify-center gap-1">
                  <FaStar size={16} className="text-yellow-500" />
                  <h1 className="text-lg font-medium">4.6</h1>
                </button>
              </div>
              <div className="w-full flex justify-end pr-4 pb-2 gap-1">
                <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <FaHeart size={20} color="red" />
                </button>
                <button className="w-16 h-16 rounded-full bg-slate-500 flex items-center justify-center">
                  <CiShoppingCart size={20} color="white" />
                </button>
              </div>
            </div>

            <div className="w-full rounded-full bg-slate-100 h-20 px-2 flex items-center justify-between">
              <button className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <IoIosArrowRoundBack size={28} />
              </button>
              <h1 className="font-medium">Slide left and right</h1>
              <button className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                <IoIosArrowRoundForward size={28} color="white" />
              </button>
            </div>
          </div>
          {/* new deals */}
          <div className="w-full flex flex-col justify-between">
            {/* great value */}
            <div className="w-full flex gap-1">
              <div className="w-[70%] flex justify-between rounded-3xl border border-white bg-[#E7E7E7] p-2 bg-right-bottom bg-no-repeat bg-cover">
                <div className="w-full flex flex-col items-start justify-center gap-3">
                  <h1 className="text-3xl font-medium pt-5 pl-2">
                    Great Value <br /> Deals
                  </h1>
                  <h1 className=" font-medium pl-2">
                    Find Items On Sale <br /> With 50-70%
                  </h1>

                  <button className="w-36 h-16 font-medium rounded-full bg-white flex items-center justify-center gap-3">
                    <MdDiscount color="#C7705D" size={20} /> 75% off
                  </button>
                </div>
                <div className="">
                  <img
                    src="https://i.postimg.cc/Fz5Ffhdw/image-removebg-preview.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-[30%] bg-[#E7E7E7] flex flex-col justify-between border border-white rounded-3xl p-2">
                <h1 className="pl-5 text-2xl font-medium pt-5">
                  Customize your <br /> products
                </h1>
                <div className="h-20 w-full text-xl font-medium rounded-full bg-white flex items-center justify-between p-3">
                  <h1 className="text-sm font-medium pl-10">Get Started</h1>
                  <button className="h-full bg-black w-24 rounded-full flex items-center justify-center">
                    <GoArrowUpRight color="white" size={28} />
                  </button>
                </div>
              </div>
            </div>
            {/* great value */}
            {/* popular items */}
            <div className="w-full h-full flex flex-col">
              <div className="w-full flex items-center justify-between py-3">
                <h1 className="text-5xl font-medium pl-7">Popular Items</h1>
                <button className="w-36 h-16 flex items-center justify-between px-5 rounded-full bg-[#EFEFEF] border border-white">
                  View all <IoIosArrowRoundForward size={24} />
                </button>
              </div>
              {/* popular items */}
              <div className="w-full h-full flex items-center justify-between gap-3">
                <div
                  id="bg-size"
                  className={`w-full h-full flex flex-col justify-between rounded-3xl bg-[#C7705D] bg-no-repeat bg-center text-white`}
                  style={{
                    backgroundImage: `url('https://i.postimg.cc/1tSkxs3H/image-1-removebg-preview.png')`,
                  }}
                >
                  <div className="w-full flex items-center justify-between px-3 pt-3">
                    <h1 className="text-xl font-medium">White Chair</h1>
                    <div className="flex items-center gap-1">
                      <div className="rounded-full w-16 h-12 bg-white bg-opacity-30 flex items-center justify-center gap-1 text-sm">
                        <FaStar className="text-yellow-400" /> 4.6
                      </div>
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <FaHeart color="red" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex justify-end px-2 pb-2">
                    <div className="w-40 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-end px-2">
                      <h1 className="pr-3 font-medium">Buy $209</h1>
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <CiShoppingCart color="black" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  id="bg-size"
                  className={`w-full h-full flex flex-col justify-between rounded-3xl bg-[#272727] bg-no-repeat bg-center text-white`}
                  style={{
                    backgroundImage: `url('https://i.postimg.cc/X7fS8scF/ca6bab9e-23da-4026-b245-15659f083bb6-removebg-preview.png')`,
                  }}
                >
                  <div className="w-full flex items-center justify-between px-3 pt-3">
                    <h1 className="text-xl font-medium">Ottoman</h1>
                    <div className="flex items-center gap-1">
                      <div className="rounded-full w-16 h-12 bg-white bg-opacity-30 flex items-center justify-center gap-1">
                        <FaStar className="text-yellow-400 text-sm" />
                        4.6
                      </div>
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <FaHeart color="red" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex justify-end px-2 pb-2">
                    <div className="w-40 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-end px-2">
                      <h1 className="pr-3 font-medium">Buy $209</h1>
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <CiShoppingCart color="black" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  id="bg-size"
                  className={`w-full h-full flex flex-col justify-between rounded-3xl bg-[#C0C4CF]  bg-no-repeat bg-center text-white`}
                  style={{
                    backgroundImage: `url('https://i.postimg.cc/1tSkxs3H/image-1-removebg-preview.png')`,
                  }}
                >
                  <div className="w-full flex items-center justify-between px-3 pt-3">
                    <h1 className="text-xl font-medium">White Chair</h1>
                    <div className="flex items-center gap-1">
                      <div className="rounded-full w-16 h-12 bg-white bg-opacity-30 flex items-center justify-center gap-1">
                        <FaStar className="text-yellow-400 text-sm" />
                        4.6
                      </div>
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <FaHeart color="red" />
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex justify-end px-2 pb-2">
                    <div className="w-40 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-end px-2">
                      <h1 className="pr-3 font-medium">Buy $209</h1>
                      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <CiShoppingCart color="black" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* popular items */}
            </div>
          </div>
        </div>
      </div>
      {/* hiring sec */}
      <div
        className="w-full h-screen bg-center bg-cover relative mb-[200px] xl:max-w-[70%] mx-auto"
        style={{
          backgroundImage: `url(${"https://i.pinimg.com/originals/7b/5f/53/7b5f53ec7ccfbaa41166e131d46bf495.jpg"})`,
        }}
      >
        <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-end">
          <div className="w-[70%] h-[460px] bg-[#F1F3F3] absolute -bottom-[200px] flex flex-col items-center justify-between p-16 gap-5 rounded">
            <h1 className="text-4xl font-medium">How you will be hired</h1>
            <p>Make sure to complete the requirement in every single step</p>
            <div className="w-full flex items-center justify-between ga3">
              <div className="size-[200px] rounded bg-black"></div>
              <div className="size-[200px] rounded bg-black"></div>
              <div className="size-[200px] rounded bg-black"></div>
              <div className="size-[200px] rounded bg-black"></div>
            </div>
          </div>
        </div>
      </div>
      {/* hiring sec */}
      {/* FAQ sec */}
      <div className="w-full h-screen relative py-[50px] xl:pl-36 xl:max-w-[70%] mx-auto">
        <div className="w-[800px] h-[800px] rounded-xl bg-[#FEF5F5] flex items-center justify-between pl-20">
          <div className="flex flex-col justify-between gap-y-16">
            <h1 className="text-5xl font-bold">How it Works</h1>
            <div className="flex flex-col items-start gap-5">
              <h1 className="text-3xl font-bold">01 Choose Your Meals</h1>
              <h1 className="text-lg font-medium text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, ipsam! Ipsam,{" "}
              </h1>
            </div>
            <div className="flex flex-col items-start gap-5">
              <h1 className="text-3xl font-bold">01 Choose Your Meals</h1>
              <h1 className="text-lg font-medium text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, ipsam! Ipsam,{" "}
              </h1>
            </div>
            <div className="flex flex-col items-start gap-5">
              <h1 className="text-3xl font-bold">01 Choose Your Meals</h1>
              <h1 className="text-lg font-medium text-slate-500">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Praesentium, ipsam! Ipsam,{" "}
              </h1>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-end">
          <div className="w-[500px] h-[600px] rounded-2xl bg-slate-500"></div>
        </div>
      </div>
      {/* FAQ sec */}
      <HomeService></HomeService>
      <Recently></Recently>
      <Recommended></Recommended>
      <Trending></Trending>
      <ForHome></ForHome>
      <HomeAbout></HomeAbout>
      <HomeNumberSection></HomeNumberSection>
      <HomeHowItWorks></HomeHowItWorks>
      <Customers></Customers>
      <RequestService></RequestService>
    </div>
  );
};

export default Home;
