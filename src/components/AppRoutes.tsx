import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Reviews from '../pages/reviews/Reviews';

const AppRoutes = (props: any) => {
    return (
        <Routes>
            <Route path="/" element={<Home accessToken={props.accessToken}/>} />
            <Route path="/reviews" element={<Reviews accessToken={props.accessToken}/>}/>
        </Routes>
    )
}

export default AppRoutes;