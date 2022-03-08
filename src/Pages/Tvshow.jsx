import React, { useState } from "react";
import { Search, Heading } from "./Home";
import MovieFilter from "../components/MovieFilter";
import Card from "../components/Card";
import { API_KEY } from "../Api";

const Tvshow = () => {
  const [searchUrl, setSearchUrl] = useState([]);
  // const LATEST_TV = `https://api.themoviedb.org/3/tv/latest?api_key=${API_KEY}&language=en-US&page=`
  const OnAir = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=`;
  const TopRated = `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=`;
  const POPULAR_BASE_URL_Tv = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=`;
  return (
    <div>
      <div className="py-10">
        <Heading heading={"TvShow Space"} />
        <Search
          searchUrl={searchUrl}
          setSearchUrl={setSearchUrl}
          type="tv"
        />
        <Card showType={searchUrl} type="tv" related={false} search={true} />
      </div>
      {/* <MovieFilter type={"Trending TvShow"} /> */}
      {/* <Card showType={ LATEST_TV} type="tv" /> */}
      {/* <Card showType={TRENDING_MOVIES} type="movie" /> */}
      <MovieFilter type={"Upcoming TvShow"} />
      <Card showType={OnAir} type="tv" />
      <MovieFilter type={"Popular TvShow"} />
      <Card showType={POPULAR_BASE_URL_Tv} type="tv" />
      <MovieFilter type={"Top Rated TvShow"} />
      <Card showType={TopRated} type="tv" />
    </div>
  );
};

export default Tvshow;
