import { useEffect, useState } from 'react';
import loginImage from '../../res/login.jpeg';
import { Link, useNavigate } from 'react-router-dom';

const defaultFieldsStyle: string = "w-full h-12 my-2 p-2 text-md border-2 rounded-xl focus:border-4 focus:border-gray-800 focus:outline-none";
const errorFieldsStyle: string = "w-full h-12 my-2 p-2 text-md border-red-600 border-2 rounded-xl focus:outline-none";

const address = "172.20.10.4";
const loginLink = `http://${address}:8080/login`;

const Login = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const inputClass = "w-full h-12 my-2 p-2 text-md border-2 rounded-xl focus:border-4 focus:border-gray-800 focus:outline-none";
  const [errorLabel, setErrorLabel] = useState(false);

  const showErrorLabel = () => {
    setErrorLabel(true);
    setTimeout(() => {setErrorLabel(false) }, 5000);
  }

  const getFieldsStyle = (): string => {
    return errorLabel ? errorFieldsStyle : defaultFieldsStyle;
}

  function parseResult(res: any) {
    if (res.status === 200) {
      res.json().then((result: any) => props.setAccessToken(result['key']));
      navigate("/");
    }
    else if (res.status === 401 || res.status === 403) {
      res.json().then(() => {
        showErrorLabel();
      });
    }
    else {
      res.json().then(() => {
        console.log("invalid")
      })
    }
  }

  function checkConstraints() {
    if (username === "" || password === "") {
      showErrorLabel();
      return false;
    }
    return true;
  }


  const loginOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'username': username,
      'password': password,
    }),
  };

  const doLogin = () => {
    if (!checkConstraints())
      return;

    fetch(loginLink, loginOptions)
      .then((res) => parseResult(res))
      .catch(error => console.log('error', error));
  }


  const divStyle = {
    backgroundImage: `url(${loginImage})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" fixed flex flex-row w-3/4 mb-24 bg-white rounded-xl md:shadow-2xl " >
        <div className="hidden md:block w-1/2 rounded-l-xl" style={divStyle}></div>
        <div className="flex md:w-1/2 justify-center">
          <div className="flex flex-col lg:w-5/6 xl:w-2/3 2xl:7:12 3xl:w-1/2">
            <img className="" src={require("../../res/logo.png")} alt="" />
            <h1 className="text-gray-800 text-2xl mx-4">Sign In</h1>
            <div id="form" className="flex flex-col p-4 w-fullrounded-xl">
              {(errorLabel && <label className="text-red-600 text-center">Invalid Username and Password</label>)}
              <input type="text" placeholder="Username" className={`${getFieldsStyle()}`} onChange={(ev) => setUsername(ev.target.value)} />
              <input type="password" placeholder="Password" className={`${getFieldsStyle()}`} onChange={(ev) => setPassword(ev.target.value)}></input>
              <a href="" className="text-gray-600 text-right text-sm">Forgot your password?</a>
              <button onClick={doLogin} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3 focus:outline-none">Sign In</button>
              <label className="text-center">Don't have an account yet? Click <Link to="/registration" className="text-blue-600">here.</Link></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

