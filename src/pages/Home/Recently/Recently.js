import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import { acParts } from "../../../assets/Callback";

const Recently = () => {
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
        <h1 className="text-2xl font-bold">Recently View</h1>
        <div className="mt-5">
          <Slider {...settings}>
            <div className="">
              <img
                className="rounded-lg h-[250px] w-[300px] pr-3"
                src={acParts}
                alt=""
              />
              <h1 className="text-center text-xl font-semibold">AC Parts</h1>
            </div>
            <div className=" ">
              <img
                className="rounded-lg  h-[250px] w-[300px] pr-3"
                src={acParts}
                alt=""
              />
              <h1 className="text-center text-xl  font-semibold ">AC Parts</h1>
            </div>
            <div className=" ">
              <img
                className="rounded-lg text-xl h-[250px] w-[300px] pr-3"
                src={acParts}
                alt=""
              />
              <h1 className="text-center text-xl  font-semibold ">AC Parts</h1>
            </div>
            <div className=" ">
              <img
                className="rounded-lg h-[250px] w-[300px] pr-3"
                src={acParts}
                alt=""
              />
              <h1 className="text-center  text-xl font-semibold ">AC Parts</h1>
            </div>
            <div className=" ">
              <img
                className="rounded-lg h-[250px] w-[300px] pr-3"
                src={acParts}
                alt=""
              />
              <h1 className="text-center text-xl font-semibold">AC Parts</h1>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Recently;
