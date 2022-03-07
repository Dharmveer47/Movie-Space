import React, { useContext } from "react";

import { BiRightArrow } from "react-icons/bi";
import MovieFilter from "../components/MovieFilter";
import Card from "../components/Card";

// import { ACTION, GetMovies } from "../Reducer/reducer";
import { MovieState } from "../App";
import { TRENDING_MOVIES, TRENDING_TVSHOW } from "../Api";
// import Tailor from "../components/Tailor";


const Home = () => {
  const bodyHide = useContext(MovieState);
  // const dispatch = bodyHide.dispatch;
  const state = bodyHide.state;
  // const { MoviesDetails, loading, error } = state;
  return (
    <div
      className={`${state.them ? "bg-gray-800 text-gray-50" : "text-gray-800"}`}
      // onClick={() => {
      //   dispatch({ type: ACTION.NAVBARSHOWHIDE, nav: false });
      // }}
    >
      <div className="pt-11">
        <div className="flexCC ">
          <Heading heading={"Movies Space"} />
        </div>
        <Search />
      </div>
      <MovieInfo des="Review your movies & TvShow" />
      <MovieInfo des="Make your favorite playlist" />
      <MovieInfo des="Like❤️ ! with IMDB " />

      <MovieFilter type={"Movies's Today Trending"} />
      <Card  showType={TRENDING_MOVIES} type='movie' related={false} />
      <MovieFilter type={"TvShow's Today Trending"} />
      <Card  showType={TRENDING_TVSHOW} type="tv"/>

      <MovieFilter type={"Free ! Watch on MXplayer"} />
      <Card showType={TRENDING_MOVIES } type="movie" />
      <MovieFilter type={"Latest Tailor Movie & Tvshow"} />
      {/* <Tailor /> */}
    </div>
  );
};
export const Heading = ({ heading }) => {
  return <h1 className="text-6xl smx:text-5xl text-center mb-5 ">{heading}</h1>;
};
export const Search = () => {
  return (
    <div className="flexCC ">
      <input
        type="search"
        placeholder="Search Movies"
        className="bg-gray-900 border-2 text-center w-[60%] h-9 rounded-l-lg outline-none caret-white focus:bg-gray-400 transition"
      />
      <button className="bg-green-400 hover:bg-green-500 h-9 dark:focus:ring-blue-800 rounded-r-lg pr-2 pl-2">
        Search
      </button>
    </div>
  );
};

const MovieInfo = ({ des }) => {
  const navShow = useContext(MovieState);
  const state = navShow.state;
  return (
    <div
      className={` ${
        state.them ? "bg-gray-800 text-gray-50" : "text-gray-800"
      } mt-4 w-[70%] m-auto md:w-[30%]`}
    >
      <div className="items-center flex ">
        <BiRightArrow fill="pink" />
        <div className="ml-1">{des}</div>
      </div>
    </div>
  );
};

export default Home;
