import { Alert, AlertTitle, Rating } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import MyAlert, { MySuccess } from '../../components/MyAlert';
import { APIManager } from '../../api/APIManager';
import { APIConfig } from '../../api/APIConfig';

const fieldsStyle: string = "w-full h-12 my-2 p-2 text-md border-2 rounded-xl focus:border-4 focus:border-gray-800 focus:outline-none ";

const AddReview = (props: any) => {
    const api = new APIManager();
    const navigate = useNavigate();

    const loc = useLocation();
    const businessName = loc.state.name;
    const businessEmail = loc.state.email;

    const [alertOpen, setAlertOpen] = useState(false);
    const [alertText, setAlertText] = useState("");
    const [success, setSuccess] = useState(false);

    const [vote, setVote] = useState<number | null>(3);
    const [date, setDate] = useState<string>();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const showAlert = () => {
        setAlertOpen(true);
        setTimeout(() => { setAlertOpen(false) }, 6000);
    }

    useEffect(() => {
        if (!props.userLogged)
            navigate("/login")
    }, []);


    function parseResult(res: any) {
        if (res.status === 200) {
            setSuccess(true);
            setTimeout(() => navigate("/"), 2000);
        }
        else if (res.status === 401 || res.status === 403) {
            res.json().then(() => {
                showAlert();            //todoo
            });
        }
        else {
            res.json().then(() => {
                console.log("invalid")
            })
        }
    }

    function checkConstraints() {
        if (title === "" || description === "") {
            setAlertText("Title and description cannot be empty");
            showAlert();
            return false;
        }
        return true;
    }

    const handleSubmit = () => {
        if (!checkConstraints())
            return;

        const requestBody = {
            'userName': props.userLogged.username,
            'businessEmail': businessEmail,
            'title': title,
            'description': description,
            'vote': vote,
            'date': date
        };

        api.post(APIConfig.REVIEWADDRESS, "/publish", requestBody)
            .then((res) => parseResult(res));
    }
    return (
        <div className="flex justify-center items-center">
            <MyAlert open={alertOpen} text={alertText} />
            <MySuccess open={success} />
            <div className="flex flex-col w-3/4 my-24 " >
                <h1 className="text-4xl text-gray-800 border-b font-bold mx-4 my-16">Share your Experience!</h1>
                <div className="flex flex-row divide-x bg-white border rounded-xl md:shadow-2xl">
                    <div className="text-center my-auto w-1/3 space-y-6">
                        <div className="flex flex-row text-center justify-center">
                            <h3 className=" text-gray-800 text-2xl">Review for </h3>
                            <h2 className="ml-2 font-bold text-2xl">@{businessName}</h2>
                        </div>
                        <h1 className="text-4xl font-bold">How Was It?</h1>
                        <Rating name="read-only" value={vote} onChange={(ev, newValue) => setVote(newValue)} />
                    </div>
                    <div className="flex flex-col justify-center py-8 items-center w-2/3">
                        <img className="w-1/2" src={require("../../res/logo.png")} alt="" />
                        <div id="form" className="flex flex-col w-1/2">
                            <label className="text-lg">Select Date:</label>
                            <input className={fieldsStyle} type="date" onChange={ev => setDate(ev.target.value)} />
                            <label className="text-lg mt-8">Title:</label>
                            <input className={fieldsStyle} type="text" placeholder="My Review" onChange={ev => setTitle(ev.target.value)} />
                            <label className="text-lg mt-8">Description:</label>
                            <textarea className={fieldsStyle + "h-56 resize-none"} placeholder="I liked it because..." onChange={ev => setDescription(ev.target.value)} />
                            <label className="text-lg mt-8">Add a Photo:</label>
                            <input type="file" ref={inputImage} onChange={(e) => handleOnChange(e)} />
                            <button
                                onClick={handleSubmit}
                                className="mx-auto bg-gray-800 text-white text-xl rounded-xl mt-8 px-6 py-3 focus:outline-none"
                            >
                                Publish
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddReview