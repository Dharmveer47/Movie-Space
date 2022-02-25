import React,{ useContext } from "react";
import Tailor from "./Tailor";
import MovieFilter from "./MovieFilter";
import { FcRating } from "react-icons/fc";
import { BsDot } from "react-icons/bs";
import Img from "../img/blackWindow.png";
import Card from "./Card";
import { MovieState } from "../App";

const MoviesExple = () => {

  return (
    <>
      <MoviesExplen />
      <MovieFilter type={"Tailors : Black Widow (2021) "} />
      <Tailor />
      <Geners />
      <MovieFilter type={"Related Movies"} />
      <Card/>
    </>
  );
};

const MoviesExplen = () => {
  const them = useContext(MovieState);
  const state = them.state;
  return (
    <div className="flexCB w-full mx-auto mdx:flex-col md:w-[90%] shadow-md rounded-lg backdrop-blur-sm bg-black/20 ">
      <div className="basis-1/4  flexCC flex-col m-2">
        <img src={Img} alt="cardImg"/>
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
        className={`${state.them ? " text-gray-50" : "text-gray-700 italic "}`}
        >
          <p>Her world, Her Secrts, Her Legacy</p>
        </div>
        <div className="mdx:flexCC flex-col w-4/6  mdx:w-auto">
          <h3 className="font-bold my-5">Overview</h3>
          <p  className={`${state.them ? " text-gray-50" : "text-gray-700 italic "}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            a! Officiis vitae, quisquam quo recusandae minima est cumque? Earum,
            vero officia. Accusantium, suscipit. Ad, optio?
          </p>
        </div>
        <table className="w-[50%] text-center my-4">
          <tr className="">
            <th className="">Compay Director</th>
            <th className="">Lorem ipsum</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
          </tr>
          <tr>
            <td>Alfreds </td>
            <td> Anders</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const Geners = () => {
  return (
    <>
      <div className=" flex items-center m-2 pb-2 overflow-scroll overflow-y-hidden ">
        <SingleGener />
        <SingleGener />
        <SingleGener />
        <SingleGener />
        <SingleGener />
        <SingleGener />
        <SingleGener />
        <SingleGener />
        <SingleGener />
        <SingleGener />
        <SingleGener />
        <SingleGener />
        <SingleGener />
      </div>
    </>
  );
};
const SingleGener = () => {
  const Gen =
    "http://image.tmdb.org/t/p/w138_and_h175_face/2qhIDp44cAqP2clOgt2afQI07X8.jpg";

  return (
    <>
      <div  className="border-1 bg-gray-50/5 shadow-xl flexCC flex-col mx-3 p-3 cursor-pointer rounded-lg">
        <img src={Gen} className="rounded-md min-w-[120px] mt-1 " alt="Gener"/>
        <div className="text-center">
          <h3 className="font-bold mt-1 text-gray-500">Tom Holland</h3>
          <p className="text-sm my-1 px-2"> Peter Parker / Spider Man</p>
        </div>
      </div>
    </>
  );
};
export default MoviesExple;
