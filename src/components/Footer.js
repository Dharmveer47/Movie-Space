import React, {useContext} from 'react';
import {MovieState } from "../App";
import { SiThemoviedatabase } from 'react-icons/si'
import { FaFacebook, FaGithub, FaImdb, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  const navShow = useContext(MovieState);
  const state = navShow.state; 
  return (
    <div className={`${state.them ? "bg-gradient-to-br to-cyan-900 from-gray-900 text-gray-50" : "bg-gradient-to-br to-cyan-100 from-gray-100"}  mt-6 `}>

      <div className='flexCB w-[90%] m-auto flex-wrap cursore md:w-[70%] py-5 mdx:justify-center space-x-4'>

        <div >
          <div className='flex items-center my-1 '><SiThemoviedatabase className='mr-1' /> <h2 className='font-bold text-center'>Movies Space</h2></div>
          <button>@themoviedb</button>
          <button>Offical Web</button>
          <button className='flex items-center'>IMDB<FaImdb className='ml-1' /></button>
          <button>Communati</button>
        </div>
        <div>
          <h2 className='font-bold text-center my-1'>About Me</h2>
          <Aboutme />
        </div>

        <div className='flexCB flex-col '>
          <h2 className='font-bold center my-1'>About API</h2>
          <button>Dev MovieDB</button>
          <button>Documentation</button>
          <button>Dicussion</button>
          <button>Leadbord</button>
        </div>

      </div>
    </div>
  );
};

const Aboutme = () => {
  return (
    <div>

      <div className='flex items-center cursor-pointer'><FaFacebook className='mr-1' />Facebook</div>
      <div className='flex items-center cursor-pointer'><FaInstagram className='mr-1' />Instagram</div>
      <div className='flex items-center cursor-pointer'><FaTwitter className='mr-1' />Twitter</div>
      <div className='flex items-center cursor-pointer'><FaGithub className='mr-1' />Github</div>
    </div>
  );
}

export default Footer;
