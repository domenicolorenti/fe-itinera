import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom';

const AppRoutes = (props: any) => {
    console.log(props.userLogged)
    return (
        <Routes>
            {/* <Route path="/" exact element={<Home accessToken={props.accessToken}/>} /> */}
        </Routes>
    )
}

export default AppRoutes;