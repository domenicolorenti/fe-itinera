
import { useNavigate } from 'react-router-dom';
import Template from '../login/Template';

const Select = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:w-5/6 xl:w-2/3 2xl:7:12 3xl:w-1/2">
      <img className="" src={require("../../res/logo.png")} alt="" />
      <h1 className="text-gray-800 text-center text-2xl mx-4">Select type</h1>
      <div id="form" className="flex flex-row p-4 ">
        <button onClick={() => { navigate("/registration") }} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3 focus:outline-none">Client</button>
        <button onClick={() => { navigate("/businessRegistration") }} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3 focus:outline-none">Business</button>
      </div>
    </div>
  );
}

const TypeSelect = () => {

  return (
    <Template child={Select()} />
  )
}

export default TypeSelect