import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProfileAPI } from '../../api/ProfileAPI';
import { Alert, Snackbar } from '@mui/material';
import Welcome from './Welcome';

const defaultFieldsStyle: string = "w-full h-12 my-4 p-2 text-md border-2 rounded-xl focus:border-4 focus:border-gray-800 focus:outline-none";
const errorFieldsStyle: string = "w-full h-12 my-4 p-2 text-md border-red-600 border-2 rounded-xl focus:outline-none";

const MyInput = (props: { placeholder: string, className: string, action: any }) => {
  return (
    <input type="text" placeholder={props.placeholder} className={props.className} onChange={(ev) => props.action(ev.target.value)} />
  );
}

const MyAlert = (props: any) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={props.open}
      autoHideDuration={6000}
    >
      <Alert severity="error" sx={{ width: '100%' }}>
        Email Already Exist!
      </Alert>
    </Snackbar>
  );
}

const BusinessRegistration = (props: any) => {
  const api = new ProfileAPI();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [owner, setOwner] = useState("");
  const [phone, setPhone] = useState("");



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
    if (name === "" || password === "" || email === "") {
      showErrorLabel();
      return false;
    }
    if (password !== retypePassword) {
      showPasswordError()
      return false;
    }
    return true;
  }

  const doBusinessRegistration = () => {
    if (!checkConstraints())
      return;

    const requestBody = {
      'name': name,
      'password': password,
      'email': email,
      'address': address,
      'city': city,
      'owner': owner,
      'phone': phone
    };

    api.post("/businessRegistration", requestBody)
      .then((res) => parseResult(res));
  }

  return (
    <>
      {(
        success ?
          <Welcome />
          :
          <div className="flex justify-center items-center">
            <div className="flex flex-row w-3/4 my-24 justify-center bg-white rounded-xl lg:shadow-2xl " >
              <div className="flex justify-center">
                <MyAlert open={alertOpen} />
                <div className="lg:grid grid-cols-3">
                  <div id="accounting-form" className="flex flex-col justify-between p-8">
                    <label className="text-center text-2xl">Account Data</label>
                    <MyInput placeholder="Name" className={`${getFieldsStyle()}`} action={setName} />
                    <input type="text" placeholder="Email*" className={`${getFieldsStyle()}`} onChange={(ev) => setEmail(ev.target.value)} />
                    <input type="password" placeholder="Password*" className={`${getFieldsStyle()}`} onChange={(ev) => setPassword(ev.target.value)} />
                    {(passwordError && <label className="text-red-600 text-center">Password not match</label>)}
                    <input id="retype" type="password" placeholder="Retype Password*" className={`${getFieldsStyle()}`} onChange={(ev) => { setRetypePassword(ev.target.value) }} />
                  </div>
                  <div id="business form" className="flex flex-col justify-between p-8">
                    <label className="text-center text-2xl">Business Data</label>
                    <input type="text" placeholder="Address" className={`${getFieldsStyle()}`} onChange={(ev) => setAddress(ev.target.value)} />
                    <input type="text" placeholder="City" className={`${getFieldsStyle()}`} onChange={(ev) => setCity(ev.target.value)} />
                    <input type="text" placeholder="Owner" className={`${getFieldsStyle()}`} onChange={(ev) => setOwner(ev.target.value)} />
                    <input type="text" placeholder="Phone" className={`${getFieldsStyle()}`} onChange={(ev) => { setPhone(ev.target.value) }} />
                  </div>
                  <div className="flex flex-col">
                    <img className="xl:mx-12" src={require("../../res/logo.png")} alt="" />
                    {(
                      errorLabel &&
                      <label className="text-red-600 text-lg text-center">
                        Invalid Input
                      </label>
                    )}
                    <h1 className="text-gray-800 text-center text-2xl m-4">
                      Business Registration
                    </h1>
                    <label className="text-center">
                      Already have an account? Click
                      <Link to="/login" className="text-blue-600 ml-1">
                        here.
                      </Link>
                    </label>
                    <button onClick={doBusinessRegistration} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3 focus:outline-none">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )}
    </>
  );
};

export default BusinessRegistration;

