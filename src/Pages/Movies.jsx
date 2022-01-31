import React from "react";
import { Search, Heading } from "./Home";
import MovieFilter from '../components/MovieFilter';
;

const Movies = () => {
  return (
    <div>
      <Heading heading={"Movies Space"}/>
      <Search />
      <MovieFilter type={"Trending Movies"}/>
    </div>
  );
};

export default Movies;
