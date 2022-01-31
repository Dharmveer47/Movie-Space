import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import { ImMenu, ImCross } from "react-icons/im";
import { FaSun, FaMoon } from "react-icons/fa";
import { ACTION } from "../App";

const Navbar = ({ state, dispatch }) => {
  const [them, setThem] = useState(true);

  return (
    <div className="flexCB whitespace-nowrap h-16 z-20 relative md:border">
      <div className="ml-2 w-1/2">
        <BiMoviePlay className="w-12 h-12 cursor-pointer hover:animate-pulse text-gray-800" />
      </div>

      <div className="flexCC w-[100%] m-auto mdx:navMobile01  ">
        <ul
          className={`flexCC ease-in-out duration-300  w-[100%] m-auto  h-10  mdx:navMobile02 ${
            state.navf ? "mdx:navMobile02 " : "mdx:-translate-x-[100%]"
          }`}
        >
          <NavLink dispatch={dispatch} state links={"Home"} />
          <NavLink dispatch={dispatch} state links={"Trending"} />
          <NavLink dispatch={dispatch} state links={"Movies"} />
          <NavLink dispatch={dispatch} state links={"TvShow"} />
          <NavLink dispatch={dispatch} state links={"Login"} />
          <NavLink dispatch={dispatch} state links={"AboutMe"} />
          <NavLink dispatch={dispatch} state links={"AboutAPI"} />
          <button
            className={`w-20 h-8  rounded-2xl  border flexCB px-2 cursor-pointer shadow-inner ${
              them ? "bg-slate-400" : "bg-slate-900 transition "
            }`}
            onClick={() => setThem((e) => !e)}
          >
            <div>
              <FaMoon
                className={`w-6 h-6 animate-pulse ${them ? "" : "hidden"}`}
              />
            </div>
            <div>
              <FaSun
                className={`w-6 h-6 text-yellow-300 animate-spin-slow ${
                  them ? "hidden" : ""
                }`}
              />
            </div>
          </button>
        </ul>
      </div>
      <div className="md:hidden ">
        <ImMenu
          onClick={() => dispatch({ type: ACTION.NAVBARSHOWHIDE, nav: true })}
          className={`w-10 h-10 cursor-pointer text-gray-800 
          ${state.navf ? "hidden" : ""} hover:animate-pulse mr-2
        `}
        />
        <ImCross
          onClick={() => dispatch({ type: ACTION.NAVBARSHOWHIDE, nav: false })}
          className={`w-9 h-9 cursor-pointer text-gray-800 
          ${state.navf ? "" : "hidden"} hover:animate-pulse mr-2
        `}
        />
      </div>
    </div>
  );
};

const NavLink = ({ links, state, dispatch }) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <>
      <Link
        to={`/${links}`}
        onClick={() => dispatch({ type: ACTION.NAVBARSHOWHIDE, nav: false })}
        className={`${
          state ? " " : "hidden"
        } cursor-pointer mx-4 flex justify-center flex-col group mdx:navMobile03  `}
      >
        <div className="  font-bold text-gray-700 hover:text-gray-500 font-['Ubuntu']">
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
