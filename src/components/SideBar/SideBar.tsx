import { useState } from "react";
import { MenuData } from "../MenuData";
import { Link } from "react-router-dom";

const Sidebtn = (props: any) => {
    return (
        <button className={"z-30 text-2xl w-full py-4 hover:bg-gray-200 focus:outline-none " + props.class} >
            {props.text}
        </button>
    )
}

const MenuItem = (props: any) => {
    const isActive = window.location.pathname === props.link;

    return (
      <Sidebtn text={props.text} onClick={props.setSidebarEnabled(false)}/>
    )
   }


const SideBar = (props: any) => {
    const [itemActive, setItemActive] = useState("/");
    
    
  return (
    <div className={"z-30 fixed rounded-lg right-0 pt-16 h-full w-full bg-white border transition-transform duration-300 ease-in-out " + props.class}>
        <ul className="flex flex-col divide-y">
            {(
                <>
                    {MenuData.map((item, val) => (
                        <Link to={item.link} key={val} onClick={() => { setItemActive(item.title) }}>
                            <MenuItem key={val} link={item.link} text={item.title} setSidebarEnabled={props.setSidebarEnabled}/>
                        </Link>
                    ))}
                </>
            )}
        </ul>
    </div>
  )
}

export default SideBar