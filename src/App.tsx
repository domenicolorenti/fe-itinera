import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import SideBar from './components/SideBar/SideBar';
import AppRoutes from './components/AppRoutes';
import { APIHandler } from './utils/APIHandler';

interface User {
  username: string,
  email: string
}

interface Business {
  name: string,
  email: string,
  address: string,
  city: string,
  owner: string
}

export default function App() {

  const [sideBarClass, setSideBarClass] = useState("transform translate-x-full");
  const [sideBarEnabled, setSideBarEnabled] = useState(false);
  const [userLogged, setUserLogged] = useState<User | Business | null>(null);
  const [sidebarChange, setSidebarChange] = useState(false);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("Auth Token"));

  const api = new APIHandler();

  const doCheck = () => {
    const checkLoginHeaders = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': String(accessToken)
    }

    api.getWithHeaders("/checkLogin", checkLoginHeaders)
        .then(res => parseResult(res));
  }

  useEffect(() => {
    console.log("token: " + accessToken);
    if (accessToken === "") {
      setUserLogged(null);
      saveToken("");
    }
    else {
      doCheck();
    }
  }, [accessToken])

  const parseResult = (res: Response) => {
    if (res.status === 200) {
      res.json().then(result => setUserLogged(result["user"]));
      saveToken(accessToken)
    }
    else if (res.status === 5000 && accessToken !== "") {
      console.log("Invalid Credentials");
      setUserLogged(null);
      saveToken("");
    }
    else {
      console.log("Error while Login");
      setUserLogged(null);
      saveToken("");
    }
  }

  const saveToken = (token: string | null) => {
    localStorage.setItem("Auth Token", token ?? '');
    setAccessToken(token);
  }


  useEffect(() => {
    if (sideBarEnabled) {
      setSideBarClass("transform -translate-x-50");
      document.body.style.overflow = "hidden";
      setSidebarChange(true);
    }
    else if (!sideBarEnabled && sidebarChange) {
      document.body.style.overflow = "visible";
      setSideBarClass("transform translate-x-full");
    }

  }, [sideBarEnabled, sidebarChange]);

  return (
    <BrowserRouter>
      <div id="main-div" className="bg-white">
        <AppBar
          userLogged={userLogged}
          sidebarEnabled={sideBarEnabled}
          setSidebarEnabled={setSideBarEnabled}
          setAccessToken={setAccessToken}
        />
        <SideBar
          userLogged={userLogged}
          setSidebarEnabled={setSideBarEnabled}
          class={sideBarClass}
        />
        <div id="content-div"
          className=""
        >
          <AppRoutes
            userLogged={userLogged}
            accessToken={accessToken}
            setAccessToken={setAccessToken}
          />
        </div>
      </div>
    </BrowserRouter>
  );
}
