import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ProfileButton = (props:{link:string, text:string}) => {
    return(
        <Link to={props.link}>
            <button className="w-full p-2 my-2 bg-gray-800 text-white text-xl rounded-xl focus:outline-none">
                {props.text}
            </button>
        </Link>
    );
}

const BusinessDashboard = () => {


    return (
        <div className="flex w-full justify-center">
            <div className="p-4 w-full my-16 md:w-5/6 bg-gray-100 rounded-xl">
                <h1 className="m-3 text-xl font-bold">Admin Dashboard</h1>
                <div className="flex p-2 flex-row bg-white rounded-xl shadow divide-x">
                    <div className="flex p-2 flex-col w-1/3 xl:w-1/6">
                        <ProfileButton link="" text="About"/>
                        <ProfileButton link="profileReviews" text="Reviews"/>
                        <ProfileButton link="profileSettings" text="Settings"/>
                    </div>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default BusinessDashboard