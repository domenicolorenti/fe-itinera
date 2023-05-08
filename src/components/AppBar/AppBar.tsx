import React, { useEffect, useRef, useState } from 'react'
import { HiMenu, HiOutlineUser, HiX } from "react-icons/hi";

const Navbtn = (props: any) => {
  return (
      <button className={"hidden px-3 py-3 mx-2 my-2 bg-white rounded-lg hover:bg-gray-200 focus:outline-none sm:block " + props.class} onClick={props.onClick}>
        {props.text}
      </button>
  )
    
}

const ProfileDropdown = (props: any) => {
  if(!props.userLogged) {
    return (
      <div className={"z-40 absolute py-2 right-0 mr-16 mt-16 bg-white rounded-lg border shadow-xl sm:mr-2 " + props.class}>
        <ul className="flex flex-col">
          <li><h3 className="text-ml my-2 px-4 text-gray-600">Private Area</h3></li>
          <li><button className="w-full py-2 hover:bg-gray-200">Log In</button></li>
        </ul>
      </div>
    )
  }
  return (
    <div className={"z-40 absolute py-2 right-0 mr-16 mt-16 bg-white rounded-lg border shadow-xl sm:mr-2 " + props.class}>
      <ul className="flex flex-col">
        <li><h3 className="text-ml m-4 px-4 text-gray-600">Private Area</h3></li>
        <li><button className="w-full py-2 hover:bg-gray-200">Profile</button></li>
        <li><button className="w-full py-2 hover:bg-gray-200">Log Out</button></li>
      </ul>
    </div>
  )
}

const AppBar = (props: any) => {
   const [dropdownProfileclass, setDropdownProfileClass] = useState("invisible");

   const wrapperRefProfile = useRef(null);
   useOutsideAlerter(wrapperRefProfile, "Profile");

   function useOutsideAlerter(ref: any, component: String) {
       useEffect(() => {
           function handleClickOutside(event: any) {
               if(component === "Profile") {
                   if(ref.current && !ref.current.contains(event.target)){
                       setTimeout(() => setDropdownProfileClass("hidden"), 100);
                   }
               }
           }

           // Bind the event listener
           document.addEventListener("mousedown", handleClickOutside);
           return () => {
               // Unbind the event listener on clean up
               document.removeEventListener("mousedown", handleClickOutside);
           };
   }, [ref]);}

   const MenuIcon = () => {
    if(!props.sidebarEnabled) {
      return (
        <HiMenu className="text-2xl" />
      )
    } else {
      return (
        <HiX className="text-2xl" />
      )
    }
   }

  return (
    <div className="relative w-max bg-white border-b shadow-lg ">
      <img className="absolute left-0 ml-5 h-16" src="https://cdn.logo.com/hotlink-ok/logo-social.png"/>
      <div className="flex h-16 flex-row justify-end">
        {(
          <>
            <Navbtn text="Scopri" />
            <Navbtn text="Recensioni" />
            <Navbtn text="Classifiche" />
            <button ref={wrapperRefProfile} className="px-3 py-3 mx-2 my-2 rounded-lg hover:bg-gray-100 focus:outline-none" 
                onClick={() => {setDropdownProfileClass("block")}}>
              <HiOutlineUser className="text-2xl"/>
            </button>
            <ProfileDropdown userLogged={props.userLogged} class={dropdownProfileclass}/>
            <button className="px-3 py-3 mx-2 my-2 rounded-lg hover:bg-gray-100 focus:outline-none sm:hidden"
                onClick={() => {props.setSidebarEnabled(!props.sidebarEnabled)}}>
              {MenuIcon()}
            </button>
          </>
        )}
      </div>

    </div>
  )
}

export default AppBar;