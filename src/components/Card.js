import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Img from "../img/blackWindow.png";
import { Link } from "react-router-dom";
import { MovieState } from "../App";

import { ACTION } from "../Reducer/reducer";

const Card = () => {
  // const showType = "Name";
  // const [MoviInfo, setMoviInfo] = useState([]);

  // const bodyHide = useContext(MovieState);
  // const dispatch = bodyHide.dispatch;
  // const state = bodyHide.state;
  // const { MoviesResults, loading, error } = state;
  // const GetMovies = async () => {
  //   let response = await axios.get(showType);
  //   if (response.status == 200) {
  //     dispatch({
  //       type: ACTION.SUCCESS,
  //       data: response.data,
  //     });
  //     return;
  //   }
  //   dispatch({ type: ACTION.ERROR, error: response.error });
  // };
  // useEffect(() => {
  //   dispatch({ type: ACTION.CALL_API });
  //   GetMovies();
  //   // MovieSplit(MoviesResults);
  //   console.log(MoviesResults);
  // }, []);
  //   const size = 2;

  //   while (MoviesResults.length > 0){
  //     if(MoviesResults.length != 0 ){
  //       setMoviInfo((MoviesResults.splice(0, size)))
  //       console.log("Fetched");
  //     }
  //   }
  //   console.log(MoviInfo);

  // return loading ? (
  //   <div className="w-40 h-52 relative m-2 my-3 sha dow-lg cursor-pointer rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse border-4 mdx:min-w-[100px] min-w-[160px]"></div>
  // ) : (
   return <div className="flexCB z-10 w-[90%] mx-auto  overflow-scroll overflow-y-hidden ">
      <SingleCard /> 
      <SingleCard /> 
      <SingleCard /> 
      <SingleCard /> 
      <SingleCard /> 
      <SingleCard /> 
      <SingleCard /> 
      <SingleCard />
    </div>
  // );
};

const SingleCard = ({ data }) => {
  return (
    <>
      <Link to="/MoviesExple">
        <SingleCard01 />
        <SingleCard02 />
      </Link>
    </>
  );
};
const SingleCard01 = ({ data }) => {
  return (
    <div className="relative m-2 my-3 shadow-lg cursor-pointer rounded-md">
      <img
        src={Img}
        alt=""
        className="mdx:min-w-[100px] h-auto min-w-[160px] "
      />
      <div className=" w-8 h-8 text-sm rounded-full bg-gray-900 flexCC text-white font-bold border-gray-50 border-2 absolute     -bottom-3 -right-3 ">
        8
      </div>
    </div>
  );
};
const SingleCard02 = ({ data }) => {
  return (
    <div className="relative m-2 my-3 shadow-lg cursor-pointer rounded-md">
      <img
        src={Img}
        alt=""
        className="mdx:min-w-[100px] h-auto min-w-[160px] "
      />
      <div className=" w-8 h-8 text-sm rounded-full bg-gray-900 flexCC text-white font-bold border-gray-50 border-2 absolute     -bottom-3 -right-3 ">
        02
      </div>
    </div>
  );
};
export default Card;
