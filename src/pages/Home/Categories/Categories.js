import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ac } from "../../../assets/Callback";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Categories = () => {
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
      style={currentSlide === 1 ? { display: "none" } : { display: "block" }}
    />
  );
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="max-w-[1140px] mx-auto bg-white h-[150px] p-10 cuShadow -mt-16 sticky z-20 rounded">
      <Slider {...settings}>
        <div>
          <img className="pl-10" src={ac} alt="" />
          <h1>AC Repair Service</h1>
        </div>
        <div>
          <img className="pl-10" src={ac} alt="" />
          <h1>AC Repair Service</h1>
        </div>
        <div>
          <img className="pl-10" src={ac} alt="" />
          <h1>AC Repair Service</h1>
        </div>
        <div>
          <img className="pl-10" src={ac} alt="" />
          <h1>AC Repair Service</h1>
        </div>
        <div>
          <img className="pl-10" src={ac} alt="" />
          <h1>AC Repair Service</h1>
        </div>
        <div>
          <img className="pl-10" src={ac} alt="" />
          <h1>AC Repair Service</h1>
        </div>
        <div>
          <img className="pl-10" src={ac} alt="" />
          <h1>AC Repair Service</h1>
        </div>
      </Slider>
    </div>
  );
};

export default Categories;
