import React from "react";
import { Search, Heading } from "./Home";
import MovieFilter, { NextPrevious } from "../components/MovieFilter";
import Card from "../components/Card";
const Tvshow = () => {
  return (
    <div>
      <Heading heading={"TvShow Space"} />
      <Search />
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
