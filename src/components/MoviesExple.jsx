import React, { useContext, useEffect, useState } from "react";
import Tailor from "./Tailor";
import MovieFilter from "./MovieFilter";
import { FcRating } from "react-icons/fc";
import { BsDot } from "react-icons/bs";
// import Img from "../img/blackWindow.png";
import Card from "./Card";
import { MovieState } from "../App";
import { useParams } from "react-router-dom";
import { API_KEY } from "../Api";
import axios from "axios";
import { Geners } from "./Geners/Geners";

const MoviesExple = () => {
  const { type, id } = useParams();
  const [show, setShow] = useState([]);

  const ShowUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`;
  const getVideo = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`;
  const geners = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}&language=en-US`;
  const relatedShow = `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${API_KEY}&language=en-US&page=`;
  // const imgUrl = `https://image.tmdb.org/t/p/w780/zcWIIS2SMGpQAwjCCzKjmZ6kJ0P.jpg`

  useEffect(() => {
    GetMovies(ShowUrl);
  }, [ShowUrl]);

  const GetMovies = async (urlMovie) => {
    let response = await axios.get(urlMovie);
    if (response.status === 200) {
      setShow(response.data);
    } else {
      console.log("error");
    }
    return;
  };
  // console.log(show);

  return (
    <>
      <MoviesExplen data={show} type={type} />
      <MovieFilter
        type={`Tailors : ${type === "tv" ? show.name : show.title} `}
      />
      <Tailor getVideo={getVideo} />
      <Geners geners={geners} />
      <MovieFilter type={"Related Movies"} />
      <Card showType={relatedShow} related={true} type={type} />
    </>
  );
};

const MoviesExplen = ({ data = [], type }) => {
  // Select all data Object value
  // console.log(data);

  const them = useContext(MovieState);
  const state = them.state;

  if (data.length === 0) return <></>;

  let Geners = data.genres
    .map((item) => {
      return item.name;
    })
    .join(", ");

  let Language = data.spoken_languages
    .map((item) => {
      return item.english_name;
    })
    .join(", ");

  // bg-Poster bg-blend-darken bg-no-repeat bg-center bg-cover
  let PosterImg = `http://image.tmdb.org/t/p/w500${data.poster_path}`;
  // let path = `${data.production_companies[0].logo_path ? data.production_companies[0].logo_path : Img}`;
  // const Logo = `http://image.tmdb.org/t/p/w92/${path} `;
  return (
    <MoviesExpleMain>
      <div className="ml-[5%] mdx:ml-[0%] basis-1/4  flexCC flex-col m-2 shadow-md rounded-3xl">
        <img
          loading="lazy"
          src={PosterImg}
          alt="cardImg"
          className="w-[300px] mdx:min-w-[100px] sm:max-w-sm h-auto rounded-3xl"
        />
      </div>
      <div className="ml-[10%] mdx:ml-[0%] basis-3/4 m-2 mdx:flexCC flex-col mdx:w-[90%] mx-auto mr-10 mdx:m-0">
        <h1 className=" text-4xl text-center font-bold my-3">
          {type === "tv" ? data.name : data.title} ({type})
        </h1>
        <div className="flexCB w-60 mdx:mx-auto smx:flex-col smx:w-auto">
          <p>PG-13</p>
          <p>
            Air date : {type === "tv" ? data.last_air_date : data.release_date}{" "}
          </p>
        </div>
        <div className="mdx:text-center ">
          <div className="flex items-center space-x-1 mdx:justify-center">
            <p>IMDb</p>
            <FcRating />
            <p>{data.vote_average}</p>
          </div>
          <p>Status : {data.status}</p>
          <p>{Geners}</p>
          <p>Spoken Language : {Language}</p>
          <p>
            Budget :{`${type === "tv" ? data.in_production : data.budget}`}{" "}
          </p>
          <p className="flex items-center mdx:justify-center">
            Total Durection : <BsDot className="w-10 h-10" />
            {type === "tv" ? data.episode_run_time : data.runtime}m
          </p>
        </div>

        <div
          className={`${
            state.them ? " text-gray-50" : "text-gray-700 italic "
          }`}
        >
          <p>{data.tagline}</p>
        </div>
        <div className="mdx:flexCC flex-col w-4/6  mdx:w-auto">
          <h3 className="font-bold my-5">Overview</h3>
          <p
            className={`${
              state.them ? " text-gray-50" : "text-gray-700 italic "
            }`}
          >
            {data.overview}
          </p>
        </div>
        <div className="flexCC flex-wrap my-5">
          <span className="font-bold text-sm">Production Compines : </span>
          {data.production_companies.map((item, index) => {
            return <ProductionComp key={index} data={item} />;
          })}
        </div>
      </div>
    </MoviesExpleMain>
  );
};

export const MoviesExpleMain = ({ children }) => {
  return (
    <div
      className="
    flexCB w-full mx-auto mdx:flex-col md:w-[90%] shadow-md rounded-lg backdrop-blur-sm bg-black/25  "
    >
      {children}
    </div>
  );
};

const ProductionComp = ({ data }) => {
  const Logo = `http://image.tmdb.org/t/p/w92/${data.logo_path}`;
  return (
    <>
      <div className="m-1 px-2  shadow-sm flexCC flex-col">
        <img src={Logo} alt="" />
        <p className="text-gray-500 text-center"> {data.name}</p>
      </div>
    </>
  );
};

export default MoviesExple;
