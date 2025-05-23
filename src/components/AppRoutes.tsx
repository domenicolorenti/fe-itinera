import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import TypeSelect from '../pages/registration/TypeSelect';
import Registration from '../pages/registration/Registration';
import BusinessRegistration from '../pages/registration/BusinessRegistration';
import Profile from '../pages/profile/Profile';
import BusinessDashboard from '../pages/profile/BusinessDashboard';
import ProfileHome from '../pages/profile/profileNavigation.tsx/ProfileHome';
import Search from '../pages/search/Search';
import Visit from '../pages/visit/Visit';
import AddReview from '../pages/review/AddReview';
import Ranking from '../pages/ranking/Rankings';


const AppRoutes = (props: any) => {
    return (
        <Routes>
            <Route index element={<Home accessToken={props.accessToken} />} />
            <Route path="/login" element={<Login setAccessToken={props.setAccessToken} />} />
            <Route path="/registrationType" element={<TypeSelect />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/businessRegistration" element={<BusinessRegistration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/dashboard" element={<BusinessDashboard />}>
                <Route index element={<ProfileHome user={props.userLogged}/>} />
                <Route path="profileReviews" element={<h1>Bellalaalalal</h1>}></Route>
                <Route path="profileSettings" element={<h1>òodwichòdvbcsdkjb</h1>}></Route>ù
            </Route>
            <Route path="/search" element={<Search/>}/>
            <Route path="/visit" element={<Visit/>}/>
            <Route path="/addreview" element={<AddReview userLogged={props.userLogged}/>}/>
            <Route path="/rankings" element={<Ranking/>}/>
        </Routes>
    )
}

export default AppRoutes;