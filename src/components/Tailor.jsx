import React from "react";
import { AiFillPlayCircle } from 'react-icons/ai'

const Tailor = () => {

  return (
    <>
      <div className="flex items-center  bg-Poster bg-blend-exclusion 
      bg-gray-600/80 w-[100%] h-80 mdx:h-64 bg-center overflow-scroll overflow-y-hidden mt-10 backdrop-blur-md">
        <TailorCard/>
        <TailorCard/>
        <TailorCard/>
        <TailorCard/>
        <TailorCard/>
      </div>
    </>
  );
};

const TailorCard = () => {
  const BgUrl =
  "https://www.themoviedb.org/t/p/w1280/m3Ys7UDzUzOyoPYKzp4GhKKokUr.jpg";
const ImgUrl =
  "http://image.tmdb.org/t/p/w500/teCy1egGQa0y8ULJvlrDHQKnxBL.jpg";
const img300200 = "	https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/mK286PAkhgLJqk5cO0BCmFLkNE7.jpg";
  return (
    <>
      <div className="my-10 border-2  relative  rounded-xl shadow-md group mx-2 ">
        <img src={img300200} alt="" className="min-w-[355px] rounded-xl group-hover:min-w-[370px] group-hover:transition mdx:min-w-[200px]" />
        <div className="text-white absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 group-hover:text-red-600 cursor-pointer">
           <AiFillPlayCircle className="w-20 h-20 mdx:w-14 mdx:h-14 rounded-full shadow-md hover:text-slate-900 active:text-gray-200  " />
        </div>
      </div>
    </>
  );
}

export default Tailor;
