import React from 'react';
import MovieFilter ,{ FilterTranding, NextPrevious} from "../components/MovieFilter";
import Card from '../components/Card'
import Tailor from '../components/Tailor';
const Trending = () => {
  return <div>
    <MovieFilter type={"Latest Tailor "}/>
    <Tailor/>
    <FilterTranding type={"Movies & Tvshow"}/>
    <Card/>
    <NextPrevious/>
    <FilterTranding type={"Movies"}/>
    <Card/>
    <NextPrevious/>
    <FilterTranding type={"TvShow"}/>
    <Card/>
    <NextPrevious/>
  </div>;
};


export default Trending;
