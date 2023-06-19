import { useState } from 'react'
import LocationSelect from './searchBar/LocationSelect'
import { HiSearch } from 'react-icons/hi'
import PriceSelect from './searchBar/PriceSelect'
import SearchDropdown from './searchBar/SearchDropdown'
import DataSelect from './searchBar/DataSelect'
import { useNavigate } from 'react-router-dom'


const SearchBar = (props: any) => {
    const [price, setPrice] = useState<number[]>([0, 100]);
    const [date, setDate] = useState<string>(new Date().toISOString().substring(0, 10));
    const [location, setLocation] = useState("");

    const navigate = useNavigate();

    const priceToString = () => {
        return `€${price[0]} - €${price[1]}`;
    }

    const doSearch = () => {
        const searchData = {
            price,
            date,
            location,
        };
        navigate("/search", {state: searchData});
    }

    return (
        <div id="search" className={"flex flex-col xl:flex-row shadow-2xl border px-4 xl:px-2 my-5 bg-white border-gray-200 rounded-xl  " + props.class}>
            <LocationSelect setLocation={setLocation} />
            <div className="flex">
                <div className="flex mx-2 divide-x py-3">
                    <DataSelect date={date} setDate={setDate} />
                    <SearchDropdown title="Price" value={priceToString()} obj={<PriceSelect price={price} setPrice={setPrice} />} />
                </div>
                <button
                    className="bg-gray-800 rounded-xl shadow p-3 my-2 ml-auto focus:outline-none"
                    onClick={doSearch}
                >
                    <HiSearch className="text-3xl text-white" />
                </button>
            </div>
        </div>
    )
}

const SearchSection = () => {

    return (
        <div className="flex flex-col w-full md:w-3/4 2xl:w-2/3 3xl:w-7/12 4xl:w-1/2 p-6">
            <div className="relative grid grid-cols-2">
                <div className="mr-2 xl:mr-24 xl:mr-40 2xl:mr-60">
                    <img className="" src={require("../../../res/search-title2.png")} alt="" />
                    <SearchBar class="hidden xl:flex absolute md:w-7/12 " />
                </div>
                <div className="">
                    <img className="" src={require("../../../res/search-image.png")} alt="" />
                </div>
            </div>
            <SearchBar class="my-8 xl:hidden" />
        </div>
    )
}

export default SearchSection