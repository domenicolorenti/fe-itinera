import React, { useEffect, useRef, useState } from 'react'
import { HiMenu, HiOutlineUser, HiX } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { MenuData } from '../MenuData';
import ProfileDropdown from '../profileDropdown/ProfileDropdown';

const Navbtn = (props: any) => {
  return (
      <button className={"hidden px-3 py-3 mx-2 my-2 bg-white rounded-lg text-lg hover:bg-gray-200 focus:outline-none sm:block " + props.class} onClick={props.onClick}>
        {props.text}
      </button>
  )
    
}

const AppBar = (props: any) => {
   const [itemActive, setItemActive] = useState("/");

   const MenuItem = (props: any) => {
    const isActive = window.location.pathname === props.link;

    return (
      <Navbtn text={props.text} />
    )
   }

   const MenuIcon = () => {
    if(!props.sidebarEnabled) {
      return (
        <HiMenu className="text-2xl text-gray-800" />
      )
    } else {
      return (
        <HiX className="text-2xl text-gray-800" />
      )
    }
   }

  return (
    <div className="relative w-full bg-white ">
      <img className="absolute left-0 ml-5 h-16" src={require("../../res/logo.png")} alt=""/>
      <div className="flex h-16 flex-row justify-end">
        {(
          <>
            {MenuData.map((item, val) => (
                <Link to={item.link} key={val} onClick={()=>{setItemActive(item.title)}}>
                    <MenuItem key={val} link={item.link} text={item.title} />
                </Link>
            ))}
            <ProfileDropdown userLogged={props.userLogged}/>
            <button className="px-3 py-3 mx-2 my-2 rounded-lg focus:outline-none sm:hidden"
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