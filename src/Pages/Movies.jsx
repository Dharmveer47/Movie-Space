import React from "react";
import { Search, Heading } from "./Home";
import MovieFilter, { NextPrevious} from '../components/MovieFilter';
import Card from "../components/Card"

const Movies = () => {
  return (
    <div>
      <div className="py-10">
      <Heading heading={"Movies Space"}/>
      <Search />
      </div>
      <MovieFilter type={"Trending Movies"}/>
      <Card/>
      <NextPrevious/>
      <MovieFilter type={"Popular Movies"}/>
      <Card/>
      <NextPrevious/>
      <MovieFilter type={"Top Rated Movies"}/>
      <Card/>
      <NextPrevious/>
    </div>
  );
};

export default Movies;
