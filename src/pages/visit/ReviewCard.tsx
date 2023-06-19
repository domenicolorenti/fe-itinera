import { Rating } from '@mui/material'
import React from 'react'
import { HiCamera } from 'react-icons/hi'

const ReviewCard = (props: any) => {
    return (
        <div className="flex flex-row divide-x rounded-xl border shadow p-4">
            <div className="flex w-2/12 p-2 text-center">
                <div className="m-auto">
                    <h1 className="text-lg mt-auto font-bold">{props.item.userName}</h1>
                    <Rating name="read-only" value={props.item.vote} readOnly />
                </div>
            </div>
            <div className="w-9/12 py-2 px-8">
                <h1 className="text-lg my-2 font-bold">{props.item.title}</h1>
                <h3 className="break-words">{props.item.description} </h3>
            </div>
            <div className="flex w-2/12 justify-center">
                <button className="p-3 text-white m-auto bg-gray-800 rounded-xl focus:outline-none">
                    <HiCamera className="text-3xl" />
                </button>
            </div>
        </div>
    )
}

export default ReviewCard