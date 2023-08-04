import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import { acParts, beautyCare, burner, homeCleaning } from "../../../assets/Callback";
import { Link } from "react-router-dom";

const Trending = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <FaAngleLeft
      id="transformedLeftIcon"
      {...props}
      style={currentSlide === 0 ? { display: "none" } : { display: "block" }}
    />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <FaAngleRight id="transformedRightIcon" {...props} />
  );
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="max-w-[1140px] mx-auto mt-16">
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Trending</h1>
          <Link className=" flex items-center text-[#C71F66] font-semibold">
            View All <FaAngleRight size={25} />
          </Link>
        </div>
        <div className="mt-5">
          <Slider {...settings}>
            <div className="">
              <img
                className="rounded-lg h-[250px] w-[300px] pr-3"
                src={homeCleaning}
                alt=""
              />
              <h1 className="text-center text-xl font-semibold">
                Home Cleaning
              </h1>
            </div>
            <div className=" ">
              <img
                className="rounded-lg  h-[250px] w-[300px] pr-3"
                src={homeCleaning}
                alt=""
              />
              <h1 className="text-center text-xl  font-semibold ">
                Home Cleaning
              </h1>
            </div>
            <div className=" ">
              <img
                className="rounded-lg text-xl h-[250px] w-[300px] pr-3"
                src={homeCleaning}
                alt=""
              />
              <h1 className="text-center text-xl  font-semibold ">
                Home Cleaning
              </h1>
            </div>
            <div className=" ">
              <img
                className="rounded-lg h-[250px] w-[300px] pr-3"
                src={homeCleaning}
                alt=""
              />
              <h1 className="text-center  text-xl font-semibold ">
                Home Cleaning
              </h1>
            </div>
            <div className=" ">
              <img
                className="rounded-lg h-[250px] w-[300px] pr-3"
                src={homeCleaning}
                alt=""
              />
              <h1 className="text-center text-xl font-semibold">
                Home Cleaning
              </h1>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Trending;
