import React from 'react'
import loginImage from '../../res/login.jpeg';

const divStyle = {
    backgroundImage: `url(${loginImage})`,
    backgroundSize: 'cover',
};

const Template = (props: any) => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div className="flex flex-row w-3/4 mb-24 bg-white rounded-xl md:shadow-2xl " >
                <div className="hidden md:block w-1/2 rounded-l-xl" style={divStyle}></div>
                <div className="flex md:w-1/2 justify-center">
                    {props.child}
                </div>
            </div>
        </div>
    )
}

export default Template