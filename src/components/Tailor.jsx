import React, { useEffect, useState } from "react";
import axios from "axios";
// import { AiFillPlayCircle } from "react-icons/ai";

const Tailor = ({ getVideo = "" }) => {
  const [video, setVideo] = useState([]);
  useEffect(() => {
    GetMovies(getVideo);
  }, [getVideo]);

  const GetMovies = async (urlMovie) => {
    let response = await axios.get(urlMovie);
    if (response.status === 200) {
      setVideo(response.data.results);
    } else {
      console.log("error");
    }
    return;
  };
  // console.log(video);
  // https://youtu.be/k_N9pU4FMOs
  // const imgUrl = `https://image.tmdb.org/t/p/w780/zcWIIS2SMGpQAwjCCzKjmZ6kJ0P.jpg`
  return (
    <>
      <div
        className="flex items-center  bg-Poster bg-blend-exclusion 
      bg-gray-600/80  bg-center overflow-scroll overflow-y-hidden mt-10 backdrop-blur-md"
      >
        {video.map((d) => (
          <TailorCard key={d.key} data={d} />
        ))}
      </div>
    </>
  );
};

const TailorCard = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="my-10 border-2  relative  rounded-xl shadow-md group mx-2 ">
        <iframe
          title={data.name}
        className="min-w-[420px] min-h-[354px] rounded-xl  group-hover:transition mdx:min-w-[200px] "
         src={`https://www.youtube.com/embed/${data.key}`} />
        {/* <img
          src={img300200}
          alt=""
          className="min-w-[355px] rounded-xl group-hover:min-w-[370px] mdx:group-hover:min-w-[300px] group-hover:transition mdx:min-w-[200px] "
        /> */}
        <p className="text-center text-xs text-gray-900 font-bold ">
          {data.name.slice(0, 30)}...
        </p>
        {/* <div className="text-white absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 group-hover:text-red-600 cursor-pointer">
          <AiFillPlayCircle className="w-20 h-20 mdx:w-14 mdx:-14 rounded-full shadow-md hover:text-slate-900 active:text-gray-200  " />
        </div> */}
      </div>
    </>
  );
};

export default Tailor;
