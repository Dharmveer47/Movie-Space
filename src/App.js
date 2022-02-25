import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { reducer } from "./Reducer/reducer";
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
import MoviesExple from "./components/MoviesExple";

export const MovieState = React.createContext();
const initialState = {
  MoviesDetails: '',
  MoviesResults: [],
  MoviesCurrentPage:'',
  MovieTotalPage: '',
  loading: false,
  error: null,
  navf: false,
  them: false
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { MoviesDetails, loading, error } = state;
  return (
    <div className={`${state.them ? "bg-gradient-to-br to-cyan-900 from-gray-900 text-gray-50"  : "bg-gray-50"}   font-['Ubuntu']`}>
      <MovieState.Provider value={{ state, dispatch }}>
        <Router>
          <Navbar />
          
          <Gotop />
          <Routes>
            <Route path="/Home" element={<Navigate to="/" />} />
            <Route path="/"      element={<Home />} />
            <Route path="/Trending" element={<Trending />} />
            <Route path="/Movies" element={<Movies />} />
            <Route path="/Tvshow" element={<Tvshow />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Aboutme" element={<Aboutme />} />
            <Route path="/Aboutapi" element={<Aboutapi />} />
            <Route path="/MoviesExple" element={<MoviesExple/>} />
          </Routes>
          <Footer />
        </Router>
      </MovieState.Provider>
    </div>
  );
};

export default App;

// Notes => import {Navigate} react-router
// <Route path={/landing} element={<Navigate to=""./page/home"}> //It's like a link
