import React from 'react'
import { Link } from 'react-router-dom'

const BusinessRegistration = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-row w-3/4 mb-24 bg-white rounded-xl md:shadow-2xl " >
        <div className="flex justify-center">
          <div className="flex flex-col w-1/2">
            <img className="" src={require("../../res/logo.png")} alt="" />
            <h1 className="text-gray-800 text-2xl mx-4">Business Registration</h1>
            <div id="form" className="flex flex-col p-4">
              <button className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3 focus:outline-none">Sign In</button>
              <label className="text-center">Don't have an account yet? Click <Link to="/registrationType" className="text-blue-600">here.</Link></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessRegistration