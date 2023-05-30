import { useEffect, useState } from 'react';
import loginImage from '../../res/login.jpeg';
import { Link, useNavigate } from 'react-router-dom';


const defaultFieldsStyle: string = "w-full h-12 my-2 p-2 text-md border-2 rounded-xl focus:border-4 focus:border-gray-800 focus:outline-none";
const errorFieldsStyle: string = "w-full h-12 my-2 p-2 text-md border-red-600 border-2 rounded-xl focus:outline-none";

const address = "172.20.10.4";
const link = `http://${address}:8080/registration`;

const Registration = (props: any) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);
    const [errorLabel, setErrorLabel] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const showErrorLabel = () => {
        setErrorLabel(true);
        setTimeout(() => { setErrorLabel(false) }, 5000);
    }

    const showPasswordError = () => {
        setPasswordError(true);
        setTimeout(() => { setPasswordError(false) }, 5000);
    }

    const getFieldsStyle = (): string => {
        return errorLabel || passwordError ? errorFieldsStyle : defaultFieldsStyle;
    }

    function parseResult(res: any) {
        if (res.status === 200) {
            setSuccess(true);
        }
        else if (res.status === 401 || res.status === 403) {
            res.json().then(() => {
                showErrorLabel();
            });
        }
        else if (res.status === 409) {
            alert("User already exists!!");
        }
        else {
            res.json().then(() => {
                console.log("invalid")
            })
        }
    }

    function checkConstraints() {
        if (username === "" || password === "" || email === "") {
            showErrorLabel();
            return false;
        }
        if (password != retypePassword) {
            showPasswordError()
            return false;
        }
        return true;
    }


    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'username': username,
            'password': password,
            'email': email,
        }),
    };

    const doRegistration = () => {
        if (!checkConstraints())
            return;

        fetch(link, options)
            .then((res) => parseResult(res))
            .catch(error => console.log('error', error));
    }


    const divStyle = {
        backgroundImage: `url(${loginImage})`,
        backgroundSize: 'cover',
    };

    const Welcome = () => {
        return (
            <div className="flex flex-col p-8 lg:w-3/4 xl:w-2/3">
                <h1 className="text-gray-800 text-2xl text-center">Welcome in</h1>
                <img className="" src={require("../../res/logo.png")} alt="" />
                <div id="form" className="flex justify-center p-4">
                    <h1 className="text-gray-800 text-right my-auto mx-4">Continue to</h1>
                    <button onClick={() => navigate("/login")} className="bg-gray-800 text-white text-lg rounded-xl p-3 focus:outline-none">Log In</button>
                </div>
            </div>
        )
    }

    return (
        <div className="flex h-screen justify-center items-center">
            <div className=" fixed flex flex-row w-3/4 mb-24 bg-white rounded-xl md:shadow-2xl " >
                <div className="hidden md:block w-1/2 rounded-l-xl" style={divStyle}></div>
                <div className="flex md:w-1/2 justify-center">
                    {( !success &&
                        <div className="flex flex-col lg:w-3/4 xl:w-2/3 2xl:w-1/2">
                            <img className="" src={require("../../res/logo.png")} alt="" />
                            <h1 className="text-gray-800 text-2xl mx-4">Sign Up</h1>
                            <div id="form" className="flex flex-col p-4 w-fullrounded-xl">
                                {(errorLabel && <label className="text-red-600 text-center">Invalid Input</label>)}
                                <input type="text" placeholder="Username" className={`${getFieldsStyle()}`} onChange={(ev) => setUsername(ev.target.value)} />
                                <input type="text" placeholder="Email" className={`${getFieldsStyle()}`} onChange={(ev) => setEmail(ev.target.value)} />
                                <input type="password" placeholder="Password" className={`${getFieldsStyle()}`} onChange={(ev) => setPassword(ev.target.value)} />
                                {(passwordError && <label className="text-red-600 text-center">Password not match</label>)}
                                <input id="retype" type="password" placeholder="Retype Password" className={`${getFieldsStyle()}`} onChange={(ev) => { setRetypePassword(ev.target.value) }} />
                                <a href="" className="text-gray-600 text-right text-sm">Forgot your password?</a>
                                <button onClick={doRegistration} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3 focus:outline-none">Sign Up</button>
                            </div>
                        </div>
                    )}
                    {( success && <Welcome/> )}
                </div>
            </div>
        </div>
    );
};

export default Registration;

