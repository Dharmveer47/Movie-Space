import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import { ImMenu, ImCross } from "react-icons/im";
import { FaSun, FaMoon } from "react-icons/fa";
import { MovieState } from "../App";
import { ACTION } from "../Reducer/reducer";

const Navbar = () => {
  const [navShowHide, setNavShowHide] = useState(false);

  const navShow = useContext(MovieState);
  const state = navShow.state;
  const dispatch = navShow.dispatch;
  return (
    <div
      className={`flexCB whitespace-nowrap h-16 z-20 sticky top-0 ${
        state.them ? "bg-gray-800 text-gray-50" : "bg-inherit text-gray-800"
      }`}
    >
      <Link to="/" className="ml-2 w-1/2">
        <BiMoviePlay
          className={`${
            state.them ? "bg-transparent text-gray-50" : "text-gray-800"
          } w-12 h-12 cursor-pointer hover:animate-pulse`}
        />
      </Link>

      <div className="flexCC w-[100%] m-auto mdx:navMobile01  ">
        <ul
          className={`flexCC ease-in-out duration-300  w-[100%] m-auto  h-10  mdx:navMobile02 ${
            navShowHide ? "mdx:navMobile02 " : "mdx:-translate-x-[100%]"
          }`}
        >
          <NavLink
            setNavShowHide={setNavShowHide}
            navShowHide={navShowHide}
            links={"Home"}
            state={state}
          />
          {/* <NavLink
            setNavShowHide={setNavShowHide}
            navShowHide={navShowHide}
            links={"Trending"}
            state={state}

          /> */}
          <NavLink
            setNavShowHide={setNavShowHide}
            navShowHide={navShowHide}
            links={"Movies"}
            state={state}
          />
          <NavLink
            setNavShowHide={setNavShowHide}
            navShowHide={navShowHide}
            links={"TvShow"}
            state={state}
          />
          {/* <NavLink
            setNavShowHide={setNavShowHide}
            navShowHide={navShowHide}
            links={"Login"}
            state={state}
          /> */}
          {/* <NavLink
            setNavShowHide={setNavShowHide}
            navShowHide={navShowHide}
            links={"AboutMe"}
            state={state}
          />
          <NavLink
            setNavShowHide={setNavShowHide}
            navShowHide={navShowHide}
            links={"AboutAPI"}
            state={state}
          /> */}
          <button
            className={`w-20 h-8  rounded-2xl  border flex items-center px-2 cursor-pointer shadow-inner box-border ${
              state.them ? "bg-slate-900 transition " : "bg-slate-400 "
            }`}
          >
            <div
              className={`${state.them ? "hidden" : ""} w-full `}
              onClick={() => dispatch({ type: ACTION.DARK_THEME, them: true })}
            >
              <FaMoon className="w-6 h-6 animate-pulse" />
            </div>

            <div
              className={`${
                state.them ? "" : "hidden"
              } w-full flex justify-end`}
              onClick={() => dispatch({ type: ACTION.DARK_THEME, them: false })}
            >
              <FaSun className={`w-6 h-6 text-yellow-300 animate-spin-slow `} />
            </div>
          </button>
          <div className="ml-5 mr-1 font-bold cursor-pointer font-sans hover:text-gray-700 hover:bg-gray-200 border py-1 px-4 rounded-sm">
            Logout
          </div>
        </ul>
      </div>
      <div className="md:hidden ">
        <ImMenu
          onClick={() => setNavShowHide((e) => !e)}
          className={`w-10 h-10 cursor-pointer hover:animate-pulse mr-2
          ${state.them ? "bg-transparent text-gray-50" : "text-gray-800"}
          ${navShowHide ? "hidden" : ""}
        `}
        />
        <ImCross
          onClick={() => setNavShowHide((per) => !per)}
          className={`w-9 h-9 cursor-pointer hover:animate-pulse mr-2
          ${state.them ? "bg-transparent text-gray-50" : "text-gray-800"}
          ${navShowHide ? "" : "hidden"} 
        `}
        />
      </div>
    </div>
  );
};

const NavLink = ({ links, setNavShowHide, navShowHide, state }) => {
  // console.log(navShowHide);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <>
      <Link
        to={`/${links}`}
        onClick={() => setNavShowHide((per) => !per)}
        className={`${state ? " " : "hidden"}
        ${
          state.them
            ? "mdx:bg-gray-900 text-gray-50 hover:text-gray-900"
            : "text-gray-700"
        } 
         cursor-pointer mx-3 flex justify-center flex-col group mdx:navMobile03  
        `}
      >
        <div
          className={`font-bold  hover:text-gray-400 font-['Ubuntu'] bg-transparent`}
        >
          {links}
        </div>
        <div
          className={`
      w-8 h-2  duration-200 rounded-xl  bg-gray-500 translate-y-2 group-hover:scale-100 group-focus:scale-100 transition-all mdx:h-0
        ${links === splitLocation[1] ? "scale-100" : "scale-0"}
      `}
        ></div>
      </Link>
    </>
  );
};
export default Navbar;
