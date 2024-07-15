import { Plus } from "lucide-react";
import React from "react";

const ButtonPlus = ({ acc }) => {
  const click = () => {
   acc++ ;
    return console.log(acc);
  };

  return (
    <button onClick={click}>
      <Plus />
    </button>
  );
};

export default ButtonPlus;
