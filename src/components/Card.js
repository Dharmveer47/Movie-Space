import React from "react";
import Img from "../img/blackWindow.png";
const Card = () => {
  return (
    <div className="flexCC flex-wrap z-10 ">
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
    </div>
  );
};

const SingleCard = () => {
  return (
    <>
      <div className="relative m-2 shadow-lg cursor-pointer">
        <img src={Img} alt=""  className="mdx:w-32 h-auto w-40 "/>
        <div className=" w-10 h-10 rounded-full bg-gray-900 flexCC text-white font-bold border-gray-50 border-4 absolute     -bottom-3 -right-3 ">
          9
        </div>
      </div>
    </>
  );
};
export default Card;
