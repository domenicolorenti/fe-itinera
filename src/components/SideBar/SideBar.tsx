import { useState } from "react";
import { MenuData } from "../MenuData";
import { Link } from "react-router-dom";

const Sidebtn = (props: any) => {
    return (
        <button className={"z-30 text-2xl w-full py-4 focus:outline-none " + props.class} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

const MenuItem = (props: any) => {
    const isActive = window.location.pathname === props.link;
  
    const handleOnClick = () => {
        props.setSidebarEnabled(false);
    };
  
    return (
      <Sidebtn text={props.text} onClick={handleOnClick}/>
    )
  }
  


const SideBar = (props: any) => {
    const [itemActive, setItemActive] = useState("/");
    
    
  return (
    <div className={"z-30 fixed rounded-lg right-0 px-8 pt-8 h-full w-full bg-white border transition-transform duration-300 ease-in-out " + props.class}>
        <h1 className="text-3xl my-2 px-4 text-gray-600">Menu</h1>
        <ul className="flex flex-col divide-y">
            {(
                <>
                    {MenuData.map((item, val) => (
                        <Link to={item.link} key={val} onClick={() => { setItemActive(item.title) }}>
                            <MenuItem key={val} link={item.link} text={item.title} setSidebarEnabled={props.setSidebarEnabled}/>
                        </Link>
                    ))}
                    <Link className="mt-8" to={"/profile"} onClick={() => { setItemActive("Profile")}}>
                        <MenuItem link="/profile" text="Profile" setSidebarEnabled={props.setSidebarEnabled}/>
                    </Link>
                </>
            )}
        </ul>
    </div>
  )
}

export default SideBar