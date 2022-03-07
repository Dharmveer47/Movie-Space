import React from "react";
import { Search, Heading } from "./Home";
import MovieFilter from "../components/MovieFilter";
import Card from "../components/Card";
import { TRENDING_MOVIES, POPULAR_BASE_URL, Upcoming_Movies } from "../Api";
const Movies = () => {
  return (
    <div>
      <div className="py-10">
        <Heading heading={"Movies Space"} />
        <Search />
      </div>
      <MovieFilter type={"Trending Movies"} />
      <Card showType={TRENDING_MOVIES} type="movie" />
      <MovieFilter type={"Popular Movies"} />
      <Card showType={POPULAR_BASE_URL} type="movie" />
      <MovieFilter type={"Top Rated Movies"} />
      <Card showType={Upcoming_Movies} type="movie" />
    </div>
  );
};

export default Movies;
