// testimonial data

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

// icons
import { FaQuoteLeft } from "react-icons/fa";

// framer motion
import { motion } from "framer-motion";

const testimonialData = [
  {
    image: "https://i.postimg.cc/tgd95h90/t-avt-1.png",
    name: "Anne Smith",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "https://i.postimg.cc/GmxcPFcW/t-avt-2.png",
    name: "Jane Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
  {
    image: "https://i.postimg.cc/T34t4SYg/t-avt-3.png",
    name: "Jhon Doe",
    position: "Customer",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!",
  },
];
const Testimonials = () => {
  return (
    <div className="h-full bg-white text-center max-w-[1200px] mx-auto my-20">
      <div className="container mx-auto overflow-hidden h-full flex flex-col justify-center">
        {/* title */}
        <h2 className="text-[2.5rem] font-semibold mb-8 xl:mb-0">
          What client <span className="text-orange-400">say.</span>
        </h2>
        {/* slider */}
        <div>
          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="h-[400px]"
          >
            {testimonialData.map((person, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col md:flex-row items-center gap-x-8 h-full px-16">
                    {/* avatar, name, position */}

                    <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                      <div className="flex flex-col justify-center text-center">
                        {/* avatar image */}

                        <div className="mb-2 mx-auto">
                          <img
                            src={person.image}
                            width={100}
                            height={100}
                            alt=""
                          />
                        </div>

                        {/* name */}
                        <div className="text-lg font-semibold">{person.name}</div>

                        {/* position */}
                        <div className="text-[12px] uppercase font-light tracking-widest">
                          {person.position}
                        </div>
                      </div>
                    </div>

                    {/* quote & message */}
                    <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-zinc-400 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                      <div className="mb-4">
                        {/* quote icon */}
                        <FaQuoteLeft className="text-4xl xl:text-6xl text-blue-500 mx-auto md:mx-0" />
                      </div>

                      {/* message */}
                      <div className="xl:text-lg text-center md:text-left font-medium">
                        {person.message}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
