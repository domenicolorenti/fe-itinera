import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import SideBar from './components/SideBar/SideBar';
import AppRoutes from './components/AppRoutes';

export default function App() {

  const [sideBarClass, setSideBarClass] = useState("transform translate-x-full");
  const [sideBarEnabled, setSideBarEnabled] = useState(false);
  const [userLogged, setUserLogged] = useState(false);
  const [sidebarChange, setSidebarChange] = useState(false);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("Auth Token"));

  const address = "172.20.10.4";
  const checkLoginLink = `http://${address}:8080/checkLogin`;

  const checkOptions = {
    method: 'GET',
    headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Authorization': String(accessToken)
    }
};

  useEffect(() => {
    console.log("token: " + accessToken);
    if(accessToken==="")
      setUserLogged(false);
    else {
      console.log("check for login")
      fetch(checkLoginLink, checkOptions)
        .then(res => parseResult(res));
    }
  },[accessToken])

  const parseResult = (res: Response) => {
    if(res.status === 200) {
      res.json().then(() => setUserLogged(true))
      saveToken(accessToken)
    }
    else if(res.status === 5000 && accessToken != ""){
      console.log("Invalid Credentials");
      setUserLogged(false);
      saveToken("");
    }
    else {
      console.log("Error while Login");
      setUserLogged(false);
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
