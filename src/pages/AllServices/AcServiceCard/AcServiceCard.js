import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { IoIosSettings } from "react-icons/io";
import '../AllServiceCard/AllServiceCard.scss'
const AcServiceCard = () => {
  const [service, setService] = useState([]);
  const [icon, setIcon] = useState(false);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="flex flex-col items-start justify-center flex-nowrap ac-container">
      {/* one property section */}
      <span className="text-2xl font-semibold text-neutral-600">
        AC Servicing
      </span>
      {/* image sec */}
      <div className="grid grid-cols-3 my-7 gap-7 img-container">
        {/* image container */}
        {service.map((card) => (
          <Link to="/service">
            <img
              src={card.img}
              alt=""
              className="w-full max-w-[15rem] rounded-xl shadow-xl"
            />
            <p className="font-semibold pt-2 text-neutral-600 text-center">
              {card.name}
            </p>
          </Link>
        ))}
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

export default AcServiceCard;
