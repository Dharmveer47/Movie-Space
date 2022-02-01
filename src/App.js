import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gotop from "./components/Gotop";
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import Movies from "./Pages/Movies";
import Tvshow from "./Pages/Tvshow";
import Login from "./Pages/Login";
import Aboutme from "./Pages/Aboutme";
import Aboutapi from "./Pages/Aboutapi";

export const ACTION = {
  NAVBARSHOWHIDE: "trueFalse",
  BODY_NAV_HIDE: "bodyNavHide",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTION.NAVBARSHOWHIDE:
      console.log(action, state);
      return (state = { navf: action.nav });
    case ACTION.BODY_NAV_HIDE:
      return (state = { lol: "gole" });
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <div className="bg-gray-50 z-20 font-['Ubuntu']">
      <Router>
        <Navbar dispatch={dispatch} state={state} />
        <Gotop />
        <Routes>
          <Route path="/Home" element={<Navigate to="/" />} />
          <Route
            path="/"
            element={<Home dispatch={dispatch} state={state} />}
          />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Tvshow" element={<Tvshow />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Aboutme" element={<Aboutme />} />
          <Route path="/Aboutapi" element={<Aboutapi />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

// Notes => import {Navigate} react-router
// <Route path={/landing} element={<Navigate to=""./page/home"}> //It's like a link
