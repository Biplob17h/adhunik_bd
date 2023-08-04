import React, { forwardRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import "../AllServiceCard/AllServiceCard.scss";
const Refrigerator = () => {
  const [icon, setIcon] = useState(false);
  return (
    <div id="ref" className="flex flex-col items-start justify-center flex-nowrap ac-container">
      {/* single service details div */}
      <span className="text-2xl font-semibold text-neutral-600">
        AC Repair Services
      </span>
      {/* single service map div */}
      <div className="flex flex-col items-center justify-start my-7 img-container">
        {/* the mappable image container */}
        <Link>
          <img
            src="https://img.freepik.com/premium-photo/technician-service-removing-air-filter-air-conditioner-cleaning_35076-3617.jpg"
            alt=""
            className="w-full max-w-[15rem] rounded-xl shadow-xl"
          />
        </Link>
        <p className="font-semibold pt-2 text-neutral-600">AC servicing</p>
      </div>
      {/* left over service details with only text */}
      <div className="flex flex-col mb-10">
        <span className="font-semibold text-lg text-neutral-600">
          All ac repair services services
        </span>
        {/* div with icon change on hover and the function */}
        <div className="grid grid-cols-3 py-5 gap-5 other-service">
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

export default Refrigerator;
