import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../../components/header/Header.jsx';
import MainScreanProfile from '../../components/mainScreenProfile/mainScreanProfile';
import UserProfileScreean from '../../components/userProfileScreean/UserProfileScreean';
import MainLibrary from '../../components/userLibrary/mainLibrary/MainLibrary';
import ProfileCard from '../../components/mainScreenProfile/profileCard/ProfileCard.jsx';
import ItemLibraryDescr from '../../components/userLibrary/itemLibraryDescr/ItemLibraryDescr';
import UserShopScreean from '../../components/userShop/userShopScreean/UserShopScreean.jsx';
import { useEffect, useState } from 'react';
import ShopService from '../../service/shop.service';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../features/user/userSlice';

const App = () => {

    const [shop, setShop] = useState([]);
    const user = useSelector((state) => state.user.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    useEffect(() => {
        
        const fetcDate = async () => {
            const response = await ShopService.getAll()
            setShop(response)
        }
        fetcDate();
    }, [])

    return (
        <Router>
            <Header/>
            <div className={styles.profileCard}>
                <ProfileCard users={user} />
                <Routes>
                    <Route path="/" element={<MainScreanProfile users={user}/>} />
                    <Route path="/profile" element={<UserProfileScreean users={user} />} />
                    <Route path="/library" element={<MainLibrary />} />
                    <Route path="/library/description" element={<ItemLibraryDescr/>} />
                    <Route path="/shop" element={<UserShopScreean shop={shop}/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;

