import React from "react";
import Rating from "./Rating";

const CardUser = ({ name, rating, gender, job, city }) => {
  return (
    <div className=" flex flex-col items-center justify-center w-[370px] h-48 bg-[#445EB5] text-white rounded-[12px]">
      <div className="w-[300px]">
        <h1 className="text-xl">{name}</h1>
        <Rating num={rating} />
        <p>{gender}</p>
        <h2 className="text-lg">{job}</h2>
        <h2 className="text-lg">{city}</h2>
      </div>
    </div>
  );
};

export default CardUser;
