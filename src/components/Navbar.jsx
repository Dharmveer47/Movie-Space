import React, {  useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";
import { ImMenu, ImCross } from "react-icons/im";
import { FaSun, FaMoon } from "react-icons/fa";
import {MovieState } from "../App";
import {ACTION } from '../Reducer/reducer'

const Navbar = () => {
  const navShow = useContext(MovieState);
  const state = navShow.state; 
  const dispatch = navShow.dispatch
  return (
    <div className="flexCB whitespace-nowrap h-16 z-20 relative ">
      <div className="ml-2 w-1/2">
        <BiMoviePlay className={`${state.them ? "bg-transparent text-gray-50" : "text-gray-800"} w-12 h-12 cursor-pointer hover:animate-pulse`} />
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
            className={`w-20 h-8  rounded-2xl  border flex items-center px-2 cursor-pointer shadow-inner box-border ${
              state.them ? "bg-slate-900 transition " : "bg-slate-400 "
            }`}
            >
            <div className={`${state.them ? "hidden" : ""} w-full `} 
            onClick={() => dispatch({type: ACTION.DARK_THEME, them: true})}>
              <FaMoon
                className="w-6 h-6 animate-pulse"
              />
            </div>

            <div className={`${state.them ? "" : "hidden"} w-full flex justify-end`} 
             onClick={() => dispatch({type: ACTION.DARK_THEME, them: false})}>
              <FaSun
             
                className={`w-6 h-6 text-yellow-300 animate-spin-slow `}
              />
            </div>
          </button>
        </ul>
      </div>
      <div className="md:hidden ">
        <ImMenu
          onClick={() => dispatch({ type: ACTION.NAVBARSHOWHIDE, nav: true })}
          className={`w-10 h-10 cursor-pointer hover:animate-pulse mr-2
          ${state.them ? "bg-transparent text-gray-50" : "text-gray-800"}
          ${state.navf ? "hidden" : ""}
        `}
        />
        <ImCross
          onClick={() => dispatch({ type: ACTION.NAVBARSHOWHIDE, nav: false })}
          className={`w-9 h-9 cursor-pointer hover:animate-pulse mr-2
          ${state.them ? "bg-transparent text-gray-50" : "text-gray-800"}
          ${state.navf ? "" : "hidden"} 
        `}
        />
      </div>
    </div>
  );
};

const NavLink = ({ links}) => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const navShow = useContext(MovieState);
  const state = navShow.state; 
  const dispatch = navShow.dispatch

  return (
    <>
      <Link
        to={`/${links}`}
        onClick={() => dispatch({ type: ACTION.NAVBARSHOWHIDE, nav: false })}
        className={`${state ? " " : "hidden"}
        ${state.them ? "mdx:bg-gray-900 text-gray-50 hover:text-gray-900" : "text-gray-700"} 
         cursor-pointer mx-3 flex justify-center flex-col group mdx:navMobile03  
        `}
      >
        <div className={`font-bold  hover:text-gray-400 font-['Ubuntu'] bg-transparent`}>
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
