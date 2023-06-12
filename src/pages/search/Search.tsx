import { useEffect, useState } from 'react';
import { HiSearch } from 'react-icons/hi';
import { useLocation } from 'react-router-dom'
import ResultCard from './ResultCard';
import { APIManager } from '../../api/APIManager';
import { APIConfig } from '../../api/APIConfig';
import { Results } from './Results';

const Search = () => {
  const [result, setResult] = useState([]);

  const loc = useLocation();
  const api = new APIManager();

  const location: string = loc.state.location;
  const date: Map<any, any> = loc.state.mapDate;
  const price: number[] = loc.state.price;

  const getData = () => {
    return "" + date?.get("day") + "/" + date?.get("month") + "/" + date?.get("year");
  }

  const getPrice = () => {
    return "€" + price[0] + " - " + "€" + price[1];
  }

  useEffect(() => {
    api.get(APIConfig.SEARCHADDRESS, "/getResult")
      .then((res) => res.json())
      .then((result) => setResult(result),
        (error) => console.log("Error", error));
  }, []);

  const handleSubmit = () => {

  }


  return (
    <div className="flex flex-col justify-center items-center w-full my-8">
      <form className="flex flex-row w-1/2 p-2 m-4 border rounded-2xl ">
        <input
          className="w-full mx-2 p-2 text-xl focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <button className="bg-gray-800 rounded-xl shadow px-8 py-2 ml-auto focus:outline-none" type="submit" onSubmit={handleSubmit}>
          <HiSearch className="text-2xl text-white" />
        </button>
      </form>
      <div className="flex flex-col w-2/3 p-4 justify-center items-center">
        {(
          <>
            {Results.map((item) => (
              <ResultCard
                name={item.name}
                address={item.address}
                description={item.description}
                value={item.value}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default Search