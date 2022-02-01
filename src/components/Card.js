import React from "react";
import Img from "../img/blackWindow.png";
const Card = () => {
  return (
    <div className="flexCB z-10 w-[90%] mx-auto  overflow-scroll overflow-y-hidden ">
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
      <SingleCard/>
    </div>
  );
};

const SingleCard = () => {
  return (
    <>
      <div>
      <div className="relative m-2 my-3 shadow-lg cursor-pointer rounded-md">
        <img src={Img} alt=""  className="mdx:min-w-[100px] h-auto min-w-[160px] "/>
        <div className=" w-8 h-8 text-sm rounded-full bg-gray-900 flexCC text-white font-bold border-gray-50 border-2 absolute     -bottom-3 -right-3 ">
          9
        </div>
      </div>
      <div className="relative m-2 my-3 shadow-lg cursor-pointer rounded-md">
        <img src={Img} alt=""  className="mdx:min-w-[100px] h-auto min-w-[160px] "/>
        <div className=" w-8 h-8 text-sm rounded-full bg-gray-900 flexCC text-white font-bold border-gray-50 border-2 absolute     -bottom-3 -right-3 ">
          9
        </div>
      </div>
      </div>
    </>
  );
};
export default Card;
