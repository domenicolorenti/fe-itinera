import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { APIManager } from '../../api/APIManager';
import { APIConfig } from '../../api/APIConfig';
import { Dialog, Rating } from '@mui/material';
import ReviewCard from './ReviewCard';

interface Business {
    name: string,
    email: string,
    address: string,
    city: string,
    owner: string,
    phone: string,
    descriprion: string,
    vote: number
}

interface Photo {
    review: number,
    photo: string
}

interface Review {
    cod: String,
    userName: string,
    title: string,
    descriptiion: string,
    vote: number,
    date: Date
}

const Visit = (props: any) => {

    const navigate = useNavigate();

    const loc = useLocation();
    const email = loc.state;
    const api = new APIManager();

    const [user, setUser] = useState<Business>();
    const [reviews, setReviews] = useState<Review[]>([]);
    const [image, setImage] = useState<Photo>();

    const [showImage, setShowImage] = useState(false);


    useEffect(() => {
        const url = `/getBusiness?email=${email}`;

        api.get(APIConfig.PROFILEADDRESS, url)
            .then(res => res.json())
            .then((result) => setUser(result["user"]),
                (error) => console.log("error", error));
    }, [email]);

    useEffect(() => {
        const url = `/getBusinessReviews?email=${email}`;

        api.get(APIConfig.REVIEWADDRESS, url)
            .then(res => res.json())
            .then(result => setReviews(result),
                (error) => console.log("error", error));
    }, [email]);

    useEffect(() => {
        const url = `/getBusinessPhoto?email=${email}`;

        api.get(APIConfig.PHOTOADDRESS, url)
            .then(res => res.json())
            .then((result) => setImage(result),
                (error) => console.log("error", error));
    }, []);


    const handleAddReview = () => {
        const businessData = {
            name: user?.name,
            email: user?.email
        }

        navigate("/addreview", { state: businessData });
    }

    return (
        <div className="flex flex-col w-full">
            <div
                id="images"
                className="flex h-56"
                style={{ backgroundImage: 'url("https://imgix.theurbanlist.com/content/article/best-northbridge-restaurants-2023-la-cholita.jpg?auto=format,compress&w=1200&h=630&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <img className=" mt-auto m-4 h-32 rounded-full" src="https://marketplace.canva.com/EAESMsqG9rI/3/0/1600w/canva-grey-%26-green-elegant-minimal-good-taste-food-restaurant-logo-jeSR74GRMC8.jpg" alt="" />
            </div>
            <div id="info" className="w-3/4 mx-auto my-4 font-mono">
                <h1 className="text-5xl text-gray-800 font-bold ">{user?.name}</h1>
                <div className="grid grid-cols-2 p-16 my-8 mx-auto rounded-xl border shadow-2xl">
                    <h2 className="text-2xl text-gray-800 font-bold">Info:</h2>
                    <h2 className="text-2xl text-gray-800 font-bold">Contacts:</h2>
                    <div className="flex flex-col m-8 space-y-8">
                        <h3 className="text-xl">Address: {user?.address}</h3>
                        <h3 className="text-xl">City: {user?.city}</h3>
                        <div className="flex flex-row space-x-2">
                            <Rating name="read-only" value={user?.vote ?? 0} precision={0.5} readOnly />
                            <h3 className="text-lg">{user?.vote.toFixed(1)}</h3>
                        </div>

                    </div>
                    <div className="flex flex-col m-8 space-y-8">
                        <h3 className="text-xl">Owner: {user?.owner}</h3>
                        <h3 className="text-xl">Email: {user?.email}</h3>
                        <h3 className="text-xl">Phone: {user?.phone}</h3>
                    </div>
                </div>
            </div>


            <div id="reviews" className="flex flex-col w-3/4 mx-auto mt-12">
                <h1 className="text-4xl border-b">Reviews</h1>
                <button className="p-2 font-bold bg-gray-800 text-white rounded-xl mt-12 focus:outline-none" onClick={handleAddReview}>Add Review</button>
                <div className="flex flex-col my-6 space-y-6">
                    {(
                        <>
                            {reviews.map((item, val) => (
                                <ReviewCard
                                    key={val}
                                    item={item}
                                />
                            ))}
                        </>
                    )}
                </div>
            </div>

        </div>
    )
}

export default Visit