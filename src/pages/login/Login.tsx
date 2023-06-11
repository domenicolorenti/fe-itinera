
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Template from './Template';
import { Switch, ThemeProvider, createTheme } from '@mui/material';
import { APIManager } from '../../api/APIManager';
import { APIConfig } from '../../api/APIConfig';

const defaultFieldsStyle: string = "w-full h-12 my-2 p-2 text-md border-2 rounded-xl focus:border-4 focus:border-gray-800 focus:outline-none";
const errorFieldsStyle: string = "w-full h-12 my-2 p-2 text-md border-red-600 border-2 rounded-xl focus:outline-none";

const MySwitch = (props: any) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#009688",
      },
    },
  });

  return (
    <label className="text-center text-lg">
      Business account
      <ThemeProvider theme={theme}>
        <Switch checked={props.business} className='ml-4' color="primary" onChange={ev => props.setBusiness(ev.target.checked)}/>
      </ThemeProvider>
    </label>
  )
}

const Login = (props: any) => {
  const api = new APIManager();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [business, setBusiness] = useState(false);

  const navigate = useNavigate();

  const [errorLabel, setErrorLabel] = useState(false);

  const showErrorLabel = () => {
    setErrorLabel(true);
    setTimeout(() => { setErrorLabel(false) }, 5000);
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

  const doLogin = () => {
    if (!checkConstraints())
      return;

    const requestBody = {
      'username': username,
      'password': password,
    };

    if (business) {
      api.post(APIConfig.PROFILEADDRESS,"/businessLogin", requestBody)
        .then((res) => parseResult(res));
    }
    else {
      api.post(APIConfig.PROFILEADDRESS,"/login", requestBody)
        .then((res) => parseResult(res));
    }
  }

  const LoginContent = () => {
    return (
      <div className="flex flex-col lg:w-5/6 xl:w-7/12 3xl:w-1/2">
        <img className="" src={require("../../res/logo.png")} alt="" />
        <h1 className="text-gray-800 text-2xl mx-4">Sign In</h1>
        <div id="form" className="flex flex-col p-4">
          <MySwitch business={business} setBusiness={setBusiness}/>
          {(errorLabel && <label className="text-red-600 text-center">Invalid Username and Password</label>)}
          <input type="text" placeholder="Username" className={`${getFieldsStyle()}`} onChange={(ev) => setUsername(ev.target.value)} />
          <input type="password" placeholder="Password" className={`${getFieldsStyle()}`} onChange={(ev) => setPassword(ev.target.value)}></input>
          <button onClick={doLogin} className="mx-auto bg-gray-800 text-white text-lg rounded-xl my-6 p-3 focus:outline-none">Sign In</button>
          <label className="text-center">Don't have an account yet? Click <Link to="/registrationType" className="text-blue-600">here.</Link></label>
        </div>
      </div>
    );
  }

  return (
    <Template child={LoginContent()} />
  );
};

export default Login;

