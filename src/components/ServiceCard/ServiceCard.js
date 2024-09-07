import React from "react";
import "./ServiceCard.css";
import { truncate } from "lodash";
import { useNavigate } from "react-router-dom";
// import Heart from "../Heart/Heart";
const ServiceCard = ({ data, i }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center justify-center r-card"
      onClick={() => navigate(`../properties/${i}`)}
    >
      {/* <Heart id={card?.id} /> */}
      <div className="w-[200px] flex items-center justify-center">
        <img src={data.image} alt="home" className="w-[100px]" />
      </div>
      {/* <span className="text-[1.2rem] font-semibold r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{data.price}</span>
      </span> */}
      <span className="text-[1rem]">{data.name}</span>
      {/* <span className="text-[0.7rem] w-[15rem]">
        {truncate(data.des, { length: 80 })}
      </span> */}
    </div>
  );
};

export default ServiceCard;
