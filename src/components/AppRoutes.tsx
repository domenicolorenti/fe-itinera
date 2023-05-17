import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Reviews from '../pages/reviews/Reviews';
import Ranking from '../pages/ranking/Ranking';
import Explore from '../pages/explore/Explore';
import Profile from '../pages/profile/Profile';

const AppRoutes = (props: any) => {
    return (
        <Routes>
            <Route path="/" element={<Home accessToken={props.accessToken}/>} />
        </Routes>
    )
}

export default AppRoutes;