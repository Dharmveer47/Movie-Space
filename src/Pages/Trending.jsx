import React from 'react';
import MovieFilter ,{ FilterTranding, NextPrevious} from "../components/MovieFilter";
import Card from '../components/Card'
import Tailor from '../components/Tailor';
const Trending = () => {
  return <div>
    <FilterTranding type={"Movies & Tvshow"}/>
    <Card/>
    <NextPrevious/>
    <FilterTranding type={"Movies"}/>
    <Card/>
    <NextPrevious/>
    <FilterTranding type={"TvShow"}/>
    <Card/>
    <NextPrevious/>
    <MovieFilter type={"Latest Tailor "}/>
    <Tailor/>
  </div>;
};


export default Trending;
