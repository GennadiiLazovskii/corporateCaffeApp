import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../../components/header/Header.jsx';
import MainScreanProfile from '../../components/mainScreenProfile/mainScreanProfile';
import UserProfileScreean from '../../components/userProfileScreean/UserProfileScreean';
import MainLibrary from '../../components/userLibrary/mainLibrary/MainLibrary';
import ProfileCard from '../../components/mainScreenProfile/profileCard/ProfileCard.jsx';
import ItemLibraryDescr from '../../components/userLibrary/itemLibraryDescr/ItemLibraryDescr';
import UserShopScreean from '../../components/userShop/userShopScreean/UserShopScreean.jsx';
import UserService from '../../service/user.service';
import { useEffect, useState } from 'react';

const App = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        
        const fetcDate = async () => {
            const response = await UserService.getAll()
            setUser(response)
        }
        fetcDate();
    }, [])

    return (
        <Router>
            <Header />
            <div className={styles.profileCard}>
                <ProfileCard users={user} />
                <Routes>
                    <Route path="/" element={<MainScreanProfile />} />
                    <Route path="/profile" element={<UserProfileScreean />} />
                    <Route path="/library" element={<MainLibrary />} />
                    <Route path="/library/description" element={<ItemLibraryDescr/>} />
                    <Route path="/shop" element={<UserShopScreean/>}/>
                </Routes>
            </div>
        </Router>
    );
};

export default App;

