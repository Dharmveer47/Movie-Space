import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { GiPreviousButton, GiNextButton } from 'react-icons/gi';

const MovieFilter = ({ type }) => {
  return (
    <div className=" flexCC w-[90%] m-auto h-8 bg-gradient-to-r from-gray-100 to-gray-500 rounded-2xl my-2">
      <h1 className="font-bold text-gray-800 text-lg truncate mdx:text-sm ">{type}</h1>
      <div className="0smx:hidden mx-2 w-6 h-6 bg-gradient-to-br from-green-400 to-pink-500 animate-spin-slow  rounded-full flexCC shadow-md border-white border">
        <div className=" w-3 h-3 bg-white rounded-full shadow-inner"></div>
      </div>
    </div>
  );
};

const FilterTranding = ({ type }) => {
  return <div>
    <div className=" flex justify-center w-[90%] m-auto h-8 bg-gradient-to-r from-gray-100 to-gray-500 rounded-2xl my-2">
      <h1 className="mt-1 mdx:mt-2 font-bold text-gray-800 text-lg mdx:text-sm truncate">{type} :</h1>

      <div className=' mx-1  px-3 relative z-10  flex flex-col pt-1 mdx:pt-2 font-bold text-lg mdx:text-sm bg-gray-900 rounded-md text-gray-200 hover:bg-gray-200 hover:text-gray-900 cursor-pointer hover:h-20 overflow-hidden ' >
        <div className='  flexCB
        '>
          <div className='hover:bg-gray-900 hover:text-gray-50 px-2 rounded-md w-[100%] text-lg mdx:text-sm'>Tody</div>
          <div className='mx-1 '> <IoIosArrowDropdownCircle /> </div>
        </div>
        <div className='hover:bg-gray-900 hover:text-gray-50 px-2 rounded-md whitespace-nowrap '>This Week</div>

      </div>

      <div className=" mt-1 mx-2 w-6 h-6 bg-gradient-to-br from-green-400 to-pink-500 animate-spin-slow  rounded-full flexCC shadow-md border-white border">
        <div className=" w-3 h-3 bg-white rounded-full shadow-inner animate-spin-slow"></div>
      </div>
    </div>
  </div>
}

const NextPrevious = ({page = 20}) => {
  return (
    <div className=" flex items-center justify-evenly w-[90%]  mx-auto mb-10 h-8 bg-gradient-to-r from-gray-100 to-gray-500 rounded-2xl my-2">
         <h1 className="font-bold text-gray-800 text-lg mdx:text-sm truncate">Total Pages : {page}</h1>
        <div className='flexCC'>
          <button className='flexCC  active:text-gray-600 hover:text-white cursor-pointer  ' > <GiPreviousButton className='w-6 h-6'/> </button>
          <div className='px-2 mx-1 rounded-md bg-gray-100'>01</div>
          <button className='flexCC active:text-gray-700 hover:text-white cursor-pointer'> <GiNextButton className='w-6 h-6' />  </button>
        </div>
    </div>
  );
};




export default MovieFilter;
export { FilterTranding , NextPrevious }
