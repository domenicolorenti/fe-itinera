import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import TypeSelect from '../pages/login/registration/TypeSelect';
import Registration from '../pages/login/registration/Registration';
import BusinessRegistration from '../pages/login/registration/BusinessRegistration';


const AppRoutes = (props: any) => {
    return (
        <Routes>
            <Route path="/" element={<Home accessToken={props.accessToken}/>} />
            <Route path="/login" element={<Login setAccessToken={props.setAccessToken}/>}/>
            <Route path="/registrationType" element={<TypeSelect />}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/businessRegistration" element={<BusinessRegistration/>}/>
        </Routes>
    )
}

export default AppRoutes;