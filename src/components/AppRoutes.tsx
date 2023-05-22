import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';


const AppRoutes = (props: any) => {
    return (
        <Routes>
            <Route path="/" element={<Home accessToken={props.accessToken}/>} />
            <Route path="/login" element={<Login />}/>
        </Routes>
    )
}

export default AppRoutes;