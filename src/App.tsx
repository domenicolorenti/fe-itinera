import React, { useEffect, useState } from 'react';
import AppBar from './components/AppBar/AppBar';
import SideBar from './components/SideBar/SideBar';

export default function App() {
  const [sideBarClass, setSideBarClass] = useState("");
  const [sideBarEnabled, setSideBarEnabled] = useState(false);
  const [userLogged, setUserLogged] = useState(true)

  let sidebarChange = false;

  useEffect(() => {
    if(sideBarEnabled && sidebarChange)
        setSideBarClass("transform -translate-x-50");
    else {
        setSideBarClass("transform translate-x-full");
        sidebarChange = true;
    }

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
