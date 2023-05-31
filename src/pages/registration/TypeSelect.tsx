import React from 'react'
import loginImage from '../../res/login.jpeg';
import { useNavigate } from 'react-router-dom';


const divStyle = {
  backgroundImage: `url(${loginImage})`,
  backgroundSize: 'cover',
};

const TypeSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-row w-3/4 mb-24 bg-white rounded-xl md:shadow-2xl " >
        <div className="hidden md:block w-1/2 rounded-l-xl" style={divStyle}></div>
        <div className="flex md:w-1/2 justify-center">
          <div className="flex flex-col lg:w-5/6 xl:w-2/3 2xl:7:12 3xl:w-1/2">
            <img className="" src={require("../../res/logo.png")} alt="" />
            <h1 className="text-gray-800 text-center text-2xl mx-4">Select type</h1>
            <div id="form" className="flex flex-row p-4 ">
                <button onClick={() => {navigate("/registration")}} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3 focus:outline-none">User</button>
                <button onClick={() => {navigate("/businessRegistration")}} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3 focus:outline-none">Business</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TypeSelect