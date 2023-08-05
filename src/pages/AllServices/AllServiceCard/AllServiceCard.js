import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import "./AllServiceCard.scss";
const AllServiceCard = () => {
  const [icon, setIcon] = useState(false);
  return (
    <div className="flex flex-col items-start justify-center flex-nowrap ac-container">
      {/* one property section */}
      <span className="text-2xl font-semibold text-neutral-600">
        AC Repair Services
      </span>
      {/* image sec */}
      <div className="flex flex-row items-center justify-start my-7 gap-7 img-container">
      {/* image container */}
        <Link>
          <img
            src="https://img.freepik.com/premium-photo/technician-service-removing-air-filter-air-conditioner-cleaning_35076-3617.jpg"
            alt=""
            className="w-full max-w-[15rem] rounded-xl shadow-xl"
          />
        <p className="font-semibold pt-2 text-neutral-600 text-center">AC servicing</p>
        </Link>
        {/* end of image container */}
        {/* image container */}
        <Link>
          <img
            src="https://img.freepik.com/premium-photo/technician-service-removing-air-filter-air-conditioner-cleaning_35076-3617.jpg"
            alt=""
            className="w-full max-w-[15rem] rounded-xl shadow-xl"
          />
        <p className="font-semibold pt-2 text-neutral-600 text-center">AC servicing</p>
        </Link>
        {/* end of image container */}
        {/* image container */}
        <Link>
          <img
            src="https://img.freepik.com/premium-photo/technician-service-removing-air-filter-air-conditioner-cleaning_35076-3617.jpg"
            alt=""
            className="w-full max-w-[15rem] rounded-xl shadow-xl"
          />
        <p className="font-semibold pt-2 text-neutral-600 text-center">AC servicing</p>
        </Link>
        {/* end of image container */}

      </div>
      {/* end of image sec */}

      {/* start of all property available */}
      <div className="flex flex-col mb-10">
        {/* title */}
        <span className="font-semibold text-lg text-neutral-600">
          All ac repair services services
        </span>
        {/* all property grid div */}
        <div className="grid grid-cols-3 py-5 gap-5 other-service">
          {/* function to change icon on hover */}
          <Link
            onMouseEnter={() => setIcon(true)}
            onMouseLeave={() => setIcon(false)}
          >
            {icon && <FiSettings />}
            {icon || <IoIosSettings />}ac installation & uninstallation
          </Link>
          <Link>
            <IoIosSettings />
            ac installation & uninstallation
          </Link>
          <Link>
            <IoIosSettings />
            ac installation & uninstallation
          </Link>
          <Link>
            <IoIosSettings />
            ac installation & uninstallation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServiceCard;
