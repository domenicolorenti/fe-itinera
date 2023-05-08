import React, { useEffect, useRef } from 'react'

const Sidebtn = (props: any) => {
    return (
        <button className={"z-30 text-2xl w-full py-4 hover:bg-gray-200 focus:outline-none " + props.class}>
            {props.text}
        </button>
    )
}


const SideBar = (props: any) => {
    
  return (
    <div className={"z-30 fixed rounded-lg right-0 pt-16 h-full w-full bg-white border transition-transform duration-300 ease-in-out " + props.class}>
        <ul className="flex flex-col divide-y">
            {(
                <>
                    <Sidebtn text="Scopri"/>
                    <Sidebtn text="Recensioni"/>
                    <Sidebtn text="Classifiche"/>
                    <Sidebtn text="Profile" class="mt-16"/>
                </>
            )}
        </ul>
    </div>
  )
}

export default SideBar