import React,{useState} from "react";
import { Search, Heading } from "./Home";
import MovieFilter from "../components/MovieFilter";
import Card from "../components/Card";
import { TOP_RATED,TRENDING_MOVIES, POPULAR_BASE_URL, Upcoming_Movies } from "../Api";
const Movies = () => {
  const [searchUrl, setSearchUrl] = useState([]);
  return (
    <div>
      <div className="py-10">
        <Heading heading={"Movies Space"} />
        <Search searchUrl={searchUrl} setSearchUrl={setSearchUrl} type="movie"/>
        <Card showType={searchUrl} type="movie" related={false} search={true} />

      </div>
      <MovieFilter type={"Trending Movies"} />
      <Card showType={TRENDING_MOVIES} type="movie" />
      <MovieFilter type={"Upcoming Movies"} />
      <Card showType={Upcoming_Movies} type="movie" />
      <MovieFilter type={"Popular Movies"} />
      <Card showType={POPULAR_BASE_URL} type="movie" />
      <MovieFilter type={"Top Rated Movies"} />
      <Card showType={TOP_RATED} type="movie" />
    </div>
  );
};

export default Movies;
