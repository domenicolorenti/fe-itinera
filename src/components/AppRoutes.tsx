import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import TypeSelect from '../pages/registration/TypeSelect';


const AppRoutes = (props: any) => {
    return (
        <Routes>
            <Route path="/" element={<Home accessToken={props.accessToken}/>} />
            <Route path="/login" element={<Login setAccessToken={props.setAccessToken}/>}/>
            <Route path="/registration" element={<TypeSelect />}/>
        </Routes>
    )
}

export default AppRoutes;