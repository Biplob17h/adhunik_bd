import React from "react";
import Slider from "react-slick";
import { burner } from "../../../assets/Callback";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const HomeService = () => {
     const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
       <FaAngleLeft

         id="transformedLeftIcon"
         {...props}
         style={currentSlide === 0 ? { display: "none" } : { display: "block" }}
       />
     );

     const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
       <FaAngleRight
         id="transformedRightIcon"
         {...props}
       />
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
        <h1 className="text-2xl font-bold">For Your Home</h1>
        <div className="mt-5">
          <Slider {...settings}>
            <div className="w-[300px] ">
              <img className="rounded-lg " src={burner} alt="" />
              <h1 className="text-center  font-semibold">Gas Stove/Burner Services</h1>
            </div>
            <div className="w-[300px] ">
              <img className="rounded-lg " src={burner} alt="" />
              <h1 className="text-center  font-semibold">Gas Stove/Burner Services</h1>
            </div>
            <div className="w-[300px] ">
              <img className="rounded-lg " src={burner} alt="" />
              <h1 className="text-center  font-semibold">Gas Stove/Burner Services</h1>
            </div>
            <div className="w-[300px] ">
              <img className="rounded-lg " src={burner} alt="" />
              <h1 className="text-center  font-semibold">Gas Stove/Burner Services</h1>
            </div>
            <div className="w-[300px] ">
              <img className="rounded-lg " src={burner} alt="" />
              <h1 className="text-center  font-semibold">Gas Stove/Burner Services</h1>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
