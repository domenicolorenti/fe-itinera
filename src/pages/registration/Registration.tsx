import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Snackbar } from '@mui/material';
import Welcome from './Welcome';
import Template from '../login/Template';
import { APIManager } from '../../api/APIManager';
import { APIConfig } from '../../api/APIConfig';

const defaultFieldsStyle: string = "w-full h-12 my-2 p-2 text-md border-2 rounded-xl focus:border-4 focus:border-gray-800 focus:outline-none";
const errorFieldsStyle: string = "w-full h-12 my-2 p-2 text-md border-red-600 border-2 rounded-xl focus:outline-none";

const MyAlert = (props: any) => {
    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={props.open}
            autoHideDuration={6000}
        >
            <Alert severity="error" sx={{ width: '100%' }}>
                User Already Exist!
            </Alert>
        </Snackbar>
    );
}

const Registration = (props: any) => {
    const api = new APIManager();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");

    const [alertOpen, setAlertOpen] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorLabel, setErrorLabel] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const showErrorLabel = () => {
        setErrorLabel(true);
        setTimeout(() => { setErrorLabel(false) }, 5000);
    }

    const showAlert = () => {
        setAlertOpen(true);
        setTimeout(() => { setAlertOpen(false) }, 6000);
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
            showAlert();
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
        if (password !== retypePassword) {
            showPasswordError()
            return false;
        }
        return true;
    }

    const doRegistration = () => {
        if (!checkConstraints())
            return;

        const requestBody = {
            'username': username,
            'password': password,
            'email': email,
        };

        api.post(APIConfig.PROFILEADDRESS, "/registration", requestBody)
            .then((res) => parseResult(res));
    }

    const Form = () => {
        return (
            <>
                <MyAlert open={alertOpen} />
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
                        <button onClick={doRegistration} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3 focus:outline-none">Sign Up</button>
                        <label className="text-center">Already have an account? Click <Link to="/login" className="text-blue-600">here.</Link></label>
                    </div>
                </div>
            </>

        );
    }

    return (
        <>
            {(
                success
                    ?
                    <Welcome />
                    :
                    <Template child={Form()} />
            )}
        </>
    );
};

export default Registration;

