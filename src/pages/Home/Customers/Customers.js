import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Customers = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <FaAngleLeft
        id="transformedLeftIconforCustomer"
        {...props}
      />
    );
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <FaAngleRight id="transformedRightIconforCustomer" {...props} />
    );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="w-full bg-[#f4f5f8] text-[#212529]">
      <div className="max-w-[1140px] mx-auto pt-20">
        <div className="flex items-center">
          <div className="bg-black w-[50px] h-[1px]" />
          <h1 className="text-lg font-semibold pl-3">SOME HAPPY FACES</h1>
        </div>
        <h1 className="text-4xl font-bold">
          Real Happy Customers, Real Stories
        </h1>
        <div>
          <Slider {...settings}>
            <div className=" w-full flex relative mb-32">
              <div className="flex mt-20">
                <div className="w-1/2 flex ">
                  <div className="w-[50px] h-[full] bg-[#00a1ba] mr-[25px]"></div>
                  <div className="mt-[20px]">
                    <p className="italic text-[21px] opacity-80">
                      <span className="text-[50px] font-bold text-black">
                        “
                      </span>
                      <span className="">
                        Such service platforms are available in other countries.
                        I’ve personally used those when I was abroad. I’m very
                        pleased that such a portal is available here in
                        Bangladesh as well. Thank you Sheba.xyz.
                      </span>
                    </p>
                    <p className="text-[19px] font-semibold mt-5">
                      - Zabeen Yusuf Nur
                    </p>
                    <p className="mt-2 text-[17px]">IT Consultant, Australia</p>
                  </div>
                </div>
                <div className="w-1/2">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/Ey0ESUxWTL0"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className=" w-full flex ">
              <div className="flex mt-20">
                <div className="w-1/2 flex ">
                  <div className="w-[50px] h-[full] bg-[#00a1ba] mr-[25px]"></div>
                  <div className="mt-[20px]">
                    <p className="italic text-[21px] opacity-80">
                      <span className="text-[50px] font-bold text-black">
                        “
                      </span>
                      <span className="">
                        It was my marriage and wasn’t getting schedule from any
                        beauty parlor. So, I downloaded Sheba.xyz app and found
                        that it has all of my requirements. The beautician
                        arrived in time and was really amazing. Thank you.
                      </span>
                    </p>
                    <p className="text-[19px] font-semibold mt-5">
                      - Zeba Fariba
                    </p>
                    <p className="mt-2 text-[17px]">Management Trainee</p>
                  </div>
                </div>
                <div className="w-1/2">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/_1juTr9E46U"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className=" w-full flex ">
              <div className="flex mt-20">
                <div className="w-1/2 flex ">
                  <div className="w-[50px] h-[full] bg-[#00a1ba] mr-[25px]"></div>
                  <div className="mt-[20px]">
                    <p className="italic text-[21px] opacity-80">
                      <span className="text-[50px] font-bold text-black">
                        “
                      </span>
                      <span className="">
                        Initially I was reluctant. I wasn’t sure how an online
                        platform would be. Sheba.xyz was able to complete the
                        job just as I imagined it to be. Thanks to them, they
                        made it possible.
                      </span>
                    </p>
                    <p className="text-[19px] font-semibold mt-5">
                      - Arif Ur Rahman
                    </p>
                    <p className="mt-2 text-[17px]">Partner</p>
                    <p className="mt-2 text-[17px]">Flyout BD</p>
                  </div>
                </div>
                <div className="w-1/2">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/kBfA4gmO6pI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
            <div className=" w-full flex ">
              <div className="flex mt-20">
                <div className="w-1/2 flex ">
                  <div className="w-[50px] h-[full] bg-[#00a1ba] mr-[25px]"></div>
                  <div className="mt-[20px]">
                    <p className="italic text-[21px] opacity-80">
                      <span className="text-[50px] font-bold text-black">
                        “
                      </span>
                      <span className="">
                        Sheba.xyz services are very helpful for working women
                        like me. They were on time as per the schedule to
                        provide the service, and I’m very satisfied with their
                        quality of service.
                      </span>
                    </p>
                    <p className="text-[19px] font-semibold mt-5">
                      - Saima Ahmad
                    </p>
                    <p className="mt-2 text-[17px]">Associate Professor</p>
                    <p className="mt-2 text-[17px]">
                      Bangladesh Open University
                    </p>
                  </div>
                </div>
                <div className="w-1/2">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/FVS6l4mJ5fo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Customers;
