import { useEffect, useState } from 'react';
import loginImage from '../../res/login.jpeg';
import { useNavigate } from 'react-router-dom';


const Login = (props: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const loginLink = "http://localhost:8080/login";

  const inputClass = "w-full h-12 my-2 p-2 text-md border-2 rounded-xl focus:border-4 focus:border-gray-800 focus:outline-none";
  const [inputStyle, setInputStyle] = useState(inputClass);
  const [errorLabel, setErrorLabel] = useState(false);

  const showErrorLabel = () => {
    setInputStyle("w-full h-12 my-2 p-2 text-md border-red-600 border-2 rounded-xl focus:outline-none");
    setErrorLabel(true);
    setTimeout(() => { setInputStyle(inputClass); setErrorLabel(false) }, 5000);
  }

  function parseResult(res: any) {
    if (res.status === 200) {
      res.json().then((result: any) => props.setAccessToken(result['key']));
      navigate("/");
    }
    else if (res.status === 401) {
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
          <div className="flex flex-col xl:w-1/2">
            <img className="" src={require("../../res/logo.png")} alt="" />
            <h1 className="text-gray-800 text-2xl mx-4">Sign In</h1>
            <div id="form" className="flex flex-col p-4 w-fullrounded-xl">
              {(errorLabel && <label className="text-red-600 text-center">Invalid Username and Password</label>)}
              <input type="text" placeholder="Username" className={inputStyle} onChange={(ev) => setUsername(ev.target.value)} />
              <input type="password" placeholder="Password" className={inputStyle} onChange={(ev) => setPassword(ev.target.value)}></input>
              <a href="" className="text-gray-600 text-right text-sm">Forgot your password?</a>
              <button onClick={doLogin} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3">Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

