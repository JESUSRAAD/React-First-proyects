import React from "react";

const GraphicPopulation = ({ country, population }) => {
  const graphicSize = (populationQuantity) => {
    const result = ((populationQuantity * 100) / 7693165599).toFixed(0);
    return result;
  };

  return (
    <div className="flex  justify-between">
      <div className="w-[82px]" >{country}</div>
      <div className="w-[400px]">
        <div
          className="bg-[#FFA500] h-4"
          style={{ width: `${graphicSize(population)}%` }}
        ></div>
      </div>

      <div>{population}</div>
    </div>
  );
};

export default GraphicPopulation;
