import React, { useState, useEffect } from "react";
import { MoviesExpleMain } from "../MoviesExple";
import MovieFilter from "../MovieFilter";
import Card from "../Card";
import { useParams } from "react-router-dom";
import { API_URL, API_KEY } from "../../Api";
import axios from "axios";

const initila = {
  personUrl: [],
  casts: [],
};

const PeopleInfo = () => {
  const { type, id } = useParams();

  const [heroData, setHeroData] = useState(initila);
  const HeorUrl = {
    casts: `${API_URL}person/${id}/${
      type === "movie" ? "movie_credits" : "tv_credits"
    }?api_key=${API_KEY}&language=en-US`,
    personUrl: `${API_URL}person/${id}?api_key=${API_KEY}&language=en-US`,
  };
  // console.log(HeorUrl.casts);
  const GetMovies = async (heroUrl, castUrl) => {
    let response = await axios.get(heroUrl);
    let response2 = await axios.get(castUrl);
    if (response.status === 200) {
      setHeroData({
        ...initila,
        personUrl: response.data,
        casts: response2.data,
      });
    } else {
      console.log("error");
    }
    return;
  };
  useEffect(() => {
    GetMovies(HeorUrl.personUrl, HeorUrl.casts);
  }, [HeorUrl.personUrl, HeorUrl.casts]);

  if (heroData.personUrl.length === 0) {
    return <div>loading....</div>;
  }

  console.log(heroData.casts.cast);
  // const MapPlat = heroData.casts.cast
  // const { biography } = heroData;

  return (
    <>
      <MovieFilter type={`Name : ${heroData.personUrl.name}`} />
      <MoviesExpleMain>
        <HeroInfo heroData={heroData.personUrl} />
      </MoviesExpleMain>
      <div className="mt-5">
        <MovieFilter
          type={`Worked in these Movies (${
            heroData.casts.cast.length ? heroData.casts.cast.length : ""
          })`}
        />
      </div>
      <Card cast={heroData.casts.cast} type={type} />
      <MovieFilter type={`At a Glance `} />
    </>
  );
};

const HeroInfo = ({ heroData = [] }) => {
  if (heroData.length === 0 || heroData === undefined) {
    <div>Loading...</div>;
  }
  const {
    name,
    biography,
    imdb_id,
    known_for_department,
    birthday,
    place_of_birth,
    popularity,
    profile_path,
  } = heroData;

  // console.log(heroData);
  return (
    <>
      <div className=" ml-[5%] p-2 mdx:ml-[0%] basis-1/4  flexCC flex-col m-2 shadow-md rounded-3xl">
        <div
          className={` ${
            profile_path === null || profile_path === "" ? "hidden" : ""
          }  `}
        >
          <img
            src={`http://image.tmdb.org/t/p/w300${profile_path}`}
            alt="Hero Img"
            className=" w-[300px] mdx:min-w-[100px] sm:max-w-sm h-auto rounded-3xl"
          />
        </div>
        <h3 className="heroName"> {name}</h3>
      </div>
      <div className="my-2 ml-[10%] mdx:ml-[0%] basis-3/4 m-2 mdx:flexCC flex-col mdx:w-[90%] mx-auto mr-10 mdx:m-0">
        <h1 className="text-4xl text-center font-bold my-3">{name}</h1>
        <div
          className={` ${
            known_for_department === null || known_for_department === ""
              ? "hidden"
              : ""
          }  `}
        >
          <span className="font-bold">Known for Department :</span>{" "}
          {known_for_department}
        </div>

        <div
          className={` ${
            birthday === null || birthday === "" ? "hidden" : ""
          }  `}
        >
          <span className="font-bold"> Date of Birth: </span> {birthday}
        </div>

        <div
          className={` ${
            popularity === null || popularity === "" ? "hidden" : ""
          }  `}
        >
          {" "}
          <span className="font-bold">Popularity: </span> {popularity}
        </div>

        <div
          className={` ${
            place_of_birth === null || place_of_birth === "" ? "hidden" : ""
          }  `}
        >
          {" "}
          <span className="font-bold">Place of Birth :</span> {place_of_birth}
        </div>
        <div
          className={` ${imdb_id === null || imdb_id === "" ? "hidden" : ""}  `}
        >
          {" "}
          <span className="font-bold">IMDb id:</span> {imdb_id}
        </div>
        <div
          className={` ${
            biography === null || biography === "" ? "hidden" : "shadow-xl"
          }  `}
        >
          <div className={` font-bold`}>Biography :</div>
          <p
            className={`  w-auto p-3 my-3  h-48 overflow-auto overflow-x-hidden  border-r-8`}
          >
            {biography}
          </p>
        </div>
      </div>
    </>
  );
};

export default PeopleInfo;
