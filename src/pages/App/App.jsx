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
import ShopService from '../../service/shop.service';

const App = () => {

    const [user, setUser] = useState([]);
    const [shop, setShop] = useState([]);
    const [profileName, setProfileName] = useState('Main')

    useEffect(() => {
        
        const fetcDate = async () => {
            const response = await UserService.getAll()
            setUser(response)
        }
        fetcDate();
    }, [])

    useEffect(() => {
        
        const fetcDate = async () => {
            const response = await ShopService.getAll()
            setShop(response)
        }
        fetcDate();
    }, [])

    const updateProfileName = (name) => {
        setProfileName(name)
    }

    return (
        <Router>
            <Header profileName={profileName}/>
            <div className={styles.profileCard}>
                <ProfileCard users={user} updateProfileName={updateProfileName} />
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

