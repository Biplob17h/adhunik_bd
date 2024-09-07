import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./ServiceBanner.css";
import { serviceData, sliderSettings } from "../../../utils/common";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";


const ServiceBanner = () => {
  // const { data, isError, isLoading } = useProperties();
  // if (isError) {
  //   return (
  //     <div className="wrapper">
  //       <span>Error while loading data</span>
  //     </div>
  //   );
  // }
  // if (isLoading) {
  //   return (
  //     <div className="wrapper flexCenter" style={{ height: "60vh" }}>
  //       <PuffLoader
  //         width="80"
  //         height="80"
  //         radius={1}
  //         color="#4066ff"
  //         aria-label="puff-loading"
  //       />
  //     </div>
  //   );
  // }
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Services</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {serviceData.slice(0, 5).map((data, i) => (
            <SwiperSlide key={i}>
              <ServiceCard data={data}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ServiceBanner;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
