export const Geners = ({geners}) => {
    return (
      <>
        <div className=" flex items-center m-2 pb-2 overflow-scroll overflow-y-hidden ">
          <SingleGener />
          <SingleGener />
          <SingleGener />
          <SingleGener />
          <SingleGener />
          <SingleGener />
          <SingleGener />
          <SingleGener />
          <SingleGener />
          <SingleGener />
          <SingleGener />
          <SingleGener />
          <SingleGener />
        </div>
      </>
    );
  };
  const SingleGener = () => {
    const Gen =
      "http://image.tmdb.org/t/p/w138_and_h175_face/2qhIDp44cAqP2clOgt2afQI07X8.jpg";
  
    return (
      <>
        <div className="border-1 bg-gray-50/5 shadow-xl flexCC flex-col mx-3 p-3 cursor-pointer rounded-lg">
          <img src={Gen} className="rounded-md min-w-[120px] mt-1 " alt="Gener" />
          <div className="text-center">
            <h3 className="font-bold mt-1 text-gray-500">Tom Holland</h3>
            <p className="text-sm my-1 px-2"> Peter Parker / Spider Man</p>
          </div>
        </div>
      </>
    );
  };