import React from "react";

const Login = () => {
  return (
    <div className="flexCC w-[90%] m-auto">
      <div className="w-80 flexCC flex-col border-2 shadow-md  mx-auto h-[25rem] rounded-md my-5">
        <h1 className="text-4xl font-bold pt-5 px-5 "> Wecome !</h1>
        <h3 className="font-bold my-5">Movie Space Login</h3>
        <div className="flexCB flex-col">
          <input className="p-1 m-1 mx-6 rounded-md pl-2 bg-gray-400/50 shadow-inner" type="text" placeholder="Username" />
          <input className="p-1 m-1 mx-6 rounded-md pl-2 bg-gray-400/50 shadow-inner" type="password" placeholder="password" />
        </div>
        <button className="my-5 w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
      </div>
    </div>
  );
};

export default Login;
