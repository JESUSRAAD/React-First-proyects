import React from "react";

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  cssClass,
}) => {
  const imgCard = (type) => {
    if (type === "visa") {
      return "https://static-00.iconduck.com/assets.00/visa-icon-2048x1286-fhy0jwfc.png";
    }
    if (type === "mastercard") {
      return "https://nudatasecurity.com/wp-content/uploads/2017/03/mastercard-logo-sq-1.png";
    }
    return;
  };

  const cssClassCard = (cssClass) => {
    if (cssClass === "greenVisa") {
      return "   flex flex-col justify-around bg-[#4DA799] text-white w-[370px] h-48 rounded-[12px] ";
    }
    if (cssClass === "greyMaster") {
      return " flex flex-col justify-around bg-[#EEEEEE] text-black w-[370px] h-48 rounded-[12px]";
    }
    if (cssClass === "goldVisa") {
      return "flex flex-col justify-around bg-[#D8BB65] text-white w-[370px] h-48 rounded-[12px]";
    }
    return
  };

  return (
    <div className={ cssClassCard( cssClass)}>
      <div>
        <img className=" w-[50px] h-[30px]  ml-[300px] " src={imgCard (type)} />
      </div>
      <div className="text-4xl flex justify-center items-center">**** **** **** {number.slice(14,19)} </div>
      <div className="ml-5">
        <div className="flex gap-8">
          <p>
            Expires {expirationMonth}/{expirationYear}
          </p>
          <p>{bank}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
