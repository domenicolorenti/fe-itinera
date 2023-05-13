import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import SideBar from './components/SideBar/SideBar';
import AppRoutes from './components/AppRoutes';

export default function App() {
  const [sideBarClass, setSideBarClass] = useState("transform translate-x-full");
  const [sideBarEnabled, setSideBarEnabled] = useState(false);
  const [userLogged, setUserLogged] = useState(true);
  const [sidebarChange, setSidebarChange] = useState(false);


  useEffect(() => {
    if(sideBarEnabled) {
        setSideBarClass("transform -translate-x-50");
        setSidebarChange(true);
    }
    else if(!sideBarEnabled && sidebarChange)
      setSideBarClass("transform translate-x-full");

}, [sideBarEnabled, sidebarChange]);

  return (
    <BrowserRouter>
    <div id="main-div" className="relative h-full bg-white">
      <AppBar userLogged={userLogged} sidebarEnabled={sideBarEnabled} setSidebarEnabled={setSideBarEnabled}/>
      <SideBar userLogged={userLogged} setSidebarEnabled={setSideBarEnabled} class={sideBarClass}/>
      <div id="content-div" className="relative h-full">
        <AppRoutes userLogged={userLogged} />

      </div>
    </div>
    </BrowserRouter>
  );
}
