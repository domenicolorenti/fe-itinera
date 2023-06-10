import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

const Search = () => {
  const loc = useLocation();

  const location:string = loc.state.location;
  const date: Map<any, any> = loc.state.mapDate;
  const price: number[] = loc.state.price;

  const getData = () => {
    return "" + date?.get("day") + "/" + date?.get("month") + "/" + date?.get("year");
  }

  const getPrice = () => {
    return "€" + price[0] + " - " + "€" + price[1];
  }

  useEffect(() => {

  }, []);


  return (
    <div>
      
    </div>
  )
}

export default Search