import React, { useEffect, useState } from "react";
import axios from "axios";

export const Geners = ({ geners }) => {
  const [gernerInfo, setGenerInfo] = useState([]);

  useEffect(() => {
    GetGeners(geners);
  }, [geners]);

  const GetGeners = async (urlMovie) => {
    let response = await axios.get(urlMovie);
    if (response.status === 200) {
      setGenerInfo(response.data.cast);
    } else {
      console.log("error");
    }
    return;
  };
  return (
    <>
      <div className=" flex items-center m-2 pb-2 overflow-scroll overflow-y-hidden ">
       {
         gernerInfo.map((d)=> <SingleGener key={d.id} data={d} />)
       }
       
       
      </div>
    </>
  );
};
const SingleGener = ({data}) => {

  let GenImg =`http://image.tmdb.org/t/p/w138_and_h175_face/${data.profile_path}`;

  return (
    <>
      <div className="border-1 bg-gray-50/5 shadow-xl flexCC flex-col mx-3 p-3 cursor-pointer rounded-lg">
        <img src={GenImg} className="rounded-md min-w-[120px] mt-1 " alt="Gener" />
        <div className="text-center">
          <h3 className="font-bold mt-1 text-gray-500">{data.name}</h3>
          <p className="text-sm my-1 px-2"> {data.character}</p>
        </div>
      </div>
    </>
  );
};
