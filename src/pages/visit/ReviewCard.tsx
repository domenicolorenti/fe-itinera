import { Dialog, DialogTitle, Rating } from '@mui/material'
import React, { useState } from 'react'
import { HiCamera, HiX } from 'react-icons/hi'
import { APIManager } from '../../api/APIManager'
import { APIConfig } from '../../api/APIConfig'

interface Reviewphoto {
    review: number,
    photo: string
}

const ReviewCard = (props: any) => {

    const [showPhoto, setShowPhoto] = useState(false);
    const [review, setReview] = useState<Reviewphoto | null>(null);

    const api = new APIManager();

    const getDescription = () => {
        if (props.item.description.length > 60)
            return props.item.description.slice(0, 60) + "...";

        return props.item.description;
    }

    const getProfilePic = () => {
        if (review?.photo)
            return "data:image/png;base64," + review?.photo;
        return require("../../res/no-photo.png");
    }

    const handleClick = () => {
        const url = `/getReviewPhoto?cod=${props.item.cod}`;

        api.get(APIConfig.PHOTOADDRESS, url)
            .then(res => res.json())
            .then((result) => setReview(result),
                (error) => console.log("error", error));

        setShowPhoto(true);
    }

    const handleClose = () => {
        setShowPhoto(false)
    }

    return (
        <div className="flex flex-row divide-x rounded-xl border shadow p-4">
            <Dialog
                open={showPhoto}
                onClose={handleClose}
            >
                <div className="p-4">
                    <div className="flex">
                        <h1 className="text-2xl font-bold">{props.item.title}</h1>
                        <button
                            className="ml-auto text-3xl focus:outline-none"
                            onClick={() => setShowPhoto(false)}
                        >
                            <HiX />
                        </button>
                    </div>
                    <img className="my-4" src={getProfilePic()} alt="" />
                    <div className="flex flex-col p-8 space-y-4">
                        <Rating name="read-only" value={props.item.vote} readOnly />
                        <h3 className="break-words">{props.item.description}</h3>
                        <h1 className="text-lg font-bold">{props.item.userName}</h1>
                        <h1 className="text-lg font-bold">{props.item.date}</h1>
                    </div>
                </div>

            </Dialog>
            <div className="flex w-2/12 p-2 text-center">
                <div className="m-auto">
                    <h1 className="text-lg mt-auto font-bold">{props.item.userName}</h1>
                    <Rating name="read-only" value={props.item.vote} readOnly />
                </div>
            </div>
            <div className="w-9/12 py-2 px-8">
                <h1 className="text-lg my-2 font-bold">{props.item.title}</h1>
                <h3 className="break-words">{getDescription()} </h3>
            </div>
            <button
                onClick={handleClick}
                className="p-3 text-gray-800 font-bold focus:outline-none"
            >
                Show
            </button>
        </div>
    )
}

export default ReviewCard