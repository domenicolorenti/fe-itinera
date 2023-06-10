import { useState } from 'react'
import LocationSelect from './searchBar/LocationSelect'
import { HiSearch } from 'react-icons/hi'
import PriceSelect from './searchBar/PriceSelect'
import SearchDropdown from './searchBar/SearchDropdown'
import DataSelect from './searchBar/DataSelect'
import dayjs, { Dayjs } from 'dayjs'
import { useNavigate } from 'react-router-dom'


const dateAsMap = (date: Dayjs | null) => {
    const map = new Map();

    map.set('day', date?.date());
    map.set('month', date?.month());
    map.set('year', date?.year());

    return map;
}

const SearchBar = (props: any) => {
    const [price, setPrice] = useState<number[]>([0, 100]);
    const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
    const [location, setLocation] = useState("");
    const mapDate = dateAsMap(date);

    const navigate = useNavigate();

    const dateToString = () => {
        return "" + date?.date() + "/" + date?.month() + "/" + date?.year();
    }

    const priceToString = () => {
        return "€" + price[0] + " - " + "€" + price[1];
    }

    const doSearch = () => {
        const searchData = {
            price,
            mapDate,
            location,
        };
        navigate("/search", {state: searchData});
    }

    return (
        <div id="search" className={"flex flex-col lg:flex-row shadow-2xl border px-4 lg:px-2 my-5 bg-white border-gray-200 rounded-xl  " + props.class}>
            <LocationSelect setLocation={setLocation} />
            <div className="flex">
                <div className="flex mx-2 ">
                    <SearchDropdown title="Data" value={dateToString()} obj={<DataSelect date={date} setDate={setDate} />} />
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
                <div className="mr-2 lg:mr-24 xl:mr-40 2xl:mr-60">
                    <img className="" src={require("../../../res/search-title2.png")} alt="" />
                    <SearchBar class="hidden lg:flex absolute md:w-7/12 " />
                </div>
                <div className="">
                    <img className="" src={require("../../../res/search-image.png")} alt="" />
                </div>
            </div>
            <SearchBar class="my-8 lg:hidden" />
        </div>
    )
}

export default SearchSection