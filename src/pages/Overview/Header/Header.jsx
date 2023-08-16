import { Link } from "react-router-dom";
import "./Header.scss";
import { FaStar } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { BsDot } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="header pb-16 text-white">
        <img
          className="w-full h-[410px] object-cover"
          src="https://i.postimg.cc/Gpz5QzJb/1612862098-paintingservices.jpg"
          alt="bgimg"
        />
        <div className="header-details 2xl:max-w-screen-lg mx-auto">
          <div className="header-service flex gap-1 text-base font-medium pt-8 pb-6 items-center">
            <Link>Home</Link>
            <div className="text-sky-500"><BsDot/></div>
            <Link>Painting & Renovation</Link>
            <div className="text-sky-500"><BsDot/></div>
            <Link>Painting Service</Link>
          </div>
          <div className="header-title flex flex-row gap-5 pb-7">
            <div className="text-5xl font-bold">Painting Services</div>
            <div className="div">
              <img
                className="w-[120px] h-[35px] mt-4"
                src="https://i.postimg.cc/PxbbBLsX/badge.png"
              />
            </div>
          </div>
          <div className="reviewRating">
            <div className="rating-count">
              <div className="rating-point flex gap-1">
                <div className="text-white text-2xl pt-1 pl-2">
                  <FaStar />
                </div>
                <div className="font-bold text-2xl text-white">4.58</div>
                <div className="text-white font-medium">out of 5</div>
              </div>

              <div className="py-3 text-[14px] font-semibold">
                (480 ratings on 6 services)
              </div>
            </div>

            <div className="service-provide pt-2">
              <div className="service-provide-line flex gap-4 items-center py-2">
                <div className="text-sky-500 bg-white rounded-full w-[14px] h-[14px] text-lg pb-2">
                  <TiTick />
                </div>
                <h3 className="text-xl font-semibold">
                  Hassle Free Painting Service
                </h3>
              </div>
              <div className="service-provide-line flex gap-4 items-center py-2">
                <div className="text-sky-500 bg-white rounded-full w-[14px] h-[14px] text-lg pb-2">
                  <TiTick />
                </div>
                <h3 className="text-xl font-semibold">
                Color Consultation & Transparent Pricing
                </h3>
              </div>
              <div className="service-provide-line flex gap-4 items-center py-2">
                <div className="text-sky-500 bg-white rounded-full w-[14px] h-[14px] text-lg pb-2">
                  <TiTick />
                </div>
                <h3 className="text-xl font-semibold">
                Background Checked Skilled Painter
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
