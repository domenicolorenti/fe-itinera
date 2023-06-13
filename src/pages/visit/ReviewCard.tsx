import React from 'react'
import { HiCamera } from 'react-icons/hi'

const ReviewCard = () => {
    return (
        <div className="flex flex-row py-8 ">
            <div className="w-1/3">
                User Data
            </div>
            <div className="w-full">
                Review
            </div>
            <button className="p-2 text-white mx-2 bg-gray-800 rounded-xl focus:outline-none">
            <HiCamera className="text-3xl"/>
            </button>
        </div>
    )
}

export default ReviewCard