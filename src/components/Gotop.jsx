import React from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Gotop = () => {
  return (
    <button onClick={()=> window.scrollTo(0, 0) } className="cursor-pointer fixed z-20 -bottom-0 right-0 m-1 w-11 h-11 rounded-full flexCC bg-white/50 ">
      <BsFillArrowUpCircleFill className="w-10 h-10 rounded-full text-gray-700/50 animate-bounce hover:text-gray-700" />
    </button>
  );
};

export default Gotop;
