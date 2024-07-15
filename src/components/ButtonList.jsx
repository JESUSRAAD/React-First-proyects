import React from "react";

const ButtonList = ({ num }) => {
  function esPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  const clickConsole = (index) =>{
 return console.log(index);
  }

  return (
    <div className="flex gap-1 flex-wrap ">
      {[...Array(num)].map((number, i) => {
        return (
          <button
            onClick={clickConsole(i)}
            className={
              i % 2 === 0
                ? `bg-[#21BF73] w-11 h-11 flex justify-center items-center`
                : esPrimo(i) == true
                ? `bg-[#FD5E53] w-11 h-11 flex justify-center items-center`
                : `bg-[#FDDB3A] w-11 h-11 flex justify-center items-center`
            }
          >
            <p className=" text-white">{i}</p>
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
