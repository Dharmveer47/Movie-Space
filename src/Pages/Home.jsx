import React from  "react";
import { BiRightArrow } from "react-icons/bi";
import MovieFilter from "../components/MovieFilter";
import Card from "../components/Card"
import { ACTION } from "../App";
import Tailor from "../components/Tailor";
const Home = ({ state, dispatch }) => {
  return (
    
    <div className="" onClick={()=>{ dispatch({type: ACTION.NAVBARSHOWHIDE, nav:false})}}>
      <div className="flexCC " >
       <Heading heading={"Movies Space"}/>
      </div>
      <Search />
      <MovieInfo des="Review your movies & TvShow" />
      <MovieInfo des="Make your favorite playlist" />
      <MovieInfo des="Like❤️ ! with IMDB " />

      <MovieFilter type={"Free ! Watch on MXplayer"}/>
      <Card/>
      <MovieFilter type={"TvShow's Today Trending"}/>
      <Card />
      <MovieFilter type={"Movies's Today Trending"}/>
      <Card />
      <MovieFilter type={"Latest Tailor Movie & Tvshow"}/>
      <Tailor/>
    </div>
  );
};
export const Heading =({heading})=> {
  return <h1 className="text-6xl smx:text-5xl text-center my-5">{heading}</h1>
}
export const Search = () => {
  return (
    <div className="flexCC ">
      <input
        type="search"
        placeholder="Search Movies"
        className="bg-gray-900 text-center w-[60%] h-9 rounded-l-lg outline-none caret-white focus:bg-gray-400 transition"
      />
      <button className="bg-green-400 hover:bg-green-500 h-9 dark:focus:ring-blue-800 rounded-r-lg pr-2 pl-2">
        Search
      </button>
    </div>
  );
};

const MovieInfo = ({ des }) => {
  return (
    <div className="mt-4 w-[70%] m-auto md:w-[30%]   text-gray-800" onClick={()=>{ console.log("Body click2")}}>
      <div className="items-center flex ">
        <BiRightArrow fill="pink" />
        <div className="ml-1">{des}</div>
      </div>
    </div>
  );
};



export default Home;