import React from "react";
import { Search, Heading } from "./Home";
import MovieFilter, { NextPrevious } from "../components/MovieFilter";
import Card from "../components/Card";
const Tvshow = () => {
  return (
    <div>
     <div className="py-10">
     <Heading heading={"TvShow Space"} />
      <Search />
     </div>
      <MovieFilter type={"Trending TvShow"} />
      <Card />
      <NextPrevious />
      <MovieFilter type={"Popular TvShow"} />
      <Card />
      <NextPrevious />
      <MovieFilter type={"Top Rated TvShow"} />
      <Card />
      <NextPrevious />
    </div>
  );
};

export default Tvshow;
