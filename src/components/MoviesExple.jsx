import React, { useContext, useEffect, useState } from "react";
import Tailor from "./Tailor";
import MovieFilter from "./MovieFilter";
import { FcRating } from "react-icons/fc";
import { BsDot } from "react-icons/bs";
import Img from "../img/blackWindow.png";
import Card from "./Card";
import { MovieState } from "../App";
import { useParams } from "react-router-dom";
import { API_KEY } from "../Api";
import axios from "axios";
import { Geners } from './Geners/Geners';


const MoviesExple = () => {
  const { type, id } = useParams();
  const [show, setShow] = useState([]);


  const ShowUrl = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}&language=en-US`;
  const getVideo = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${API_KEY}&language=en-US`
  const geners = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${API_KEY}&language=en-US`
  const relatedShow = `https://api.themoviedb.org/3/${type}/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
  // const imgUrl = `https://image.tmdb.org/t/p/w780/zcWIIS2SMGpQAwjCCzKjmZ6kJ0P.jpg`

  useEffect(() => {
    GetMovies(ShowUrl);
  }, []);

  const GetMovies = async (urlMovie) => {
    let response = await axios.get(urlMovie);
    if (response.status === 200) {
      setShow(response.data);
    } else {
      console.log("error");
    }
    return;
  };
  // console.log(relatedShow);

  return (
    <>
      <MoviesExplen data={show}/>
      <MovieFilter type={`Tailors : ${show.original_title} `} />
      <Tailor getVideo={getVideo} />
      <Geners geners={geners} />
      <MovieFilter type={"Related Movies"} />
      <Card  showType={relatedShow}  />
      
    </>
  );
};

const MoviesExplen = () => {
  const them = useContext(MovieState);
  const state = them.state;
  return (
    <div className="flexCB w-full mx-auto mdx:flex-col md:w-[90%] shadow-md rounded-lg backdrop-blur-sm bg-black/20 ">
      <div className="basis-1/4  flexCC flex-col m-2">
        <img src={Img} alt="cardImg" />
        <h3>Prime Video</h3>
      </div>
      <div className="basis-3/4 m-2 mdx:flexCC flex-col mdx:w-[90%] mx-auto mr-10 mdx:m-0">
        <h1 className=" text-4xl text-center font-bold my-3">
          Black Widow (2021)
        </h1>
        <div className="flexCB w-60 mdx:mx-auto smx:flex-col smx:w-auto">
          <p>PG-13</p>
          <p>Air date : 02/02/2022</p>
        </div>
        <div>
          <div className="flex items-center space-x-1 mdx:justify-center">
            <p>IMDb</p>
            <FcRating />
            <p>6.8</p>
          </div>
          <p>Status : Relesed</p>
          <p>Action, Adventue, Thriller, Science Frication</p>
          <p className="flex items-center mdx:justify-center">
            Total Durection : <BsDot className="w-10 h-10" /> 2h 21m
          </p>
        </div>

        <div
          className={`${
            state.them ? " text-gray-50" : "text-gray-700 italic "
          }`}
        >
          <p>Her world, Her Secrts, Her Legacy</p>
        </div>
        <div className="mdx:flexCC flex-col w-4/6  mdx:w-auto">
          <h3 className="font-bold my-5">Overview</h3>
          <p
            className={`${
              state.them ? " text-gray-50" : "text-gray-700 italic "
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            a! Officiis vitae, quisquam quo recusandae minima est cumque? Earum,
            vero officia. Accusantium, suscipit. Ad, optio?
          </p>
        </div>
        <div className="w-[80%] text-center  my-4 whitespace-nowrap">
          <div className="font-bold flex justify-around">
            <div className="">Compay Director </div>
            <div className="">Lorem ipsum</div>
          </div>
          <div className=" flex justify-around">
            <div>Alfreds Futterkiste</div>
            <div>Maria Anders</div>
          </div>
          <div className=" flex justify-around">
            <div>Alfreds </div>
            <div> Anders</div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default MoviesExple;
