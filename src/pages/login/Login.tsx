import { useState } from 'react';
import loginImage from '../../res/login.jpeg';
import { useNavigate } from 'react-router-dom';


const Form = () => {
  const myStyle: string = "w-full h-12 my-2 p-2 border-2 rounded-xl focus:outline-none focus:border-4 focus:border-gray-800";

  return (
    <form className="flex flex-col my-2 p-2 w-fullrounded-xl">
      <input type="text" placeholder="Username" className={myStyle} />
      <input type="password" placeholder="Password" className={myStyle}></input>
      <a href="" className="text-gray-600 text-right text-sm">Forgot your password?</a>
      <input type="submit" value="Sign In" className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3" />
    </form>
  )
}


const Login = (props: any) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginLink = "http://localhost:8080/login";

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

  function parseResult(res: any) {
    if (res.status === 200) {
      res.json().then((result: any) => props.setAccessToken(result['key']));
    }
    else {
      res.json().then((result: any) => {
        console.log("invalid")
      })
    }
  }

  function checkConstraints() {
    if (username === "" || password === "") {
      console.log("empty");
      return false;
    }
    return true;
  }

  const doLogin = () => {
    if (!checkConstraints())
      return;

    console.log("sto loggando!");
    fetch(loginLink, loginOptions)
      .then((res) => parseResult(res));
  }


  const divStyle = {
    backgroundImage: `url(${loginImage})`,
    backgroundSize: 'cover',
  };
  const myStyle: string = "w-full h-12 my-2 p-2 border-2 text-md rounded-xl focus:outline-none focus:border-4 focus:border-gray-800";

  return (
    <div className="flex h-screen justify-center items-center">
      <div className=" fixed flex flex-row w-3/4 mb-24 bg-white rounded-xl md:shadow-2xl " >
        <div className="hidden md:block w-1/2 rounded-l-xl" style={divStyle}></div>
        <div className="flex md:w-1/2 justify-center">
          <div className="flex flex-col xl:w-1/2">
            <img className="" src={require("../../res/logo.png")} alt="" />
            <h1 className="text-gray-800 text-2xl mx-4">Sign In</h1>
            <form className="flex flex-col my-2 p-4 w-fullrounded-xl">
              <input type="text" placeholder="Username" className={myStyle} onChange={(ev) => setUsername(ev.target.value)}/>
              <input type="password" placeholder="Password" className={myStyle} onChange={(ev) => setPassword(ev.target.value)}></input>
              <a href="" className="text-gray-600 text-right text-sm">Forgot your password?</a>
              
            </form>
            <input type="submit" value="Sign In" onClick={doLogin} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

