import React, { useEffect, useState } from 'react';
import AppBar from './components/AppBar/AppBar';
import SideBar from './components/SideBar/SideBar';

export default function App() {
  const [sideBarClass, setSideBarClass] = useState("transform translate-x-full");
  const [sideBarEnabled, setSideBarEnabled] = useState(false);
  const [userLogged, setUserLogged] = useState(true);
  const [sidebarChange, setSidebarChange] = useState(false);

  useEffect(() => {
    if(sideBarEnabled) {
        console.log("prova commit");
        setSideBarClass("transform -translate-x-50");
        setSidebarChange(true);
    }
    else if(!sideBarEnabled && sidebarChange)
      setSideBarClass("transform translate-x-full");

}, [sideBarEnabled]);

  return (
    <div className="relative h-full bg-white">
      <AppBar userLogged={userLogged} sidebarEnabled={sideBarEnabled} setSidebarEnabled={setSideBarEnabled}/>
      <SideBar userLogged={userLogged} setSidebarEnabled={setSideBarEnabled} class={sideBarClass}/>
      <div className="relative h-full">
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>
          <h1>Titolo</h1>

      </div>
    </div>
  );
}
