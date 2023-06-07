import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.scss';
import Header from '../../components/header/Header.jsx';
import MainScreanProfile from '../../components/mainScreenProfile/mainScreanProfile';
import UserProfileScreean from '../../components/userProfileScreean/UserProfileScreean';
import MainLibrary from '../../components/userLibrary/mainLibrary/MainLibrary';
import ProfileCard from '../../components/mainScreenProfile/profileCard/ProfileCard.jsx';
import ItemLibraryDescr from '../../components/userLibrary/itemLibraryDescr/ItemLibraryDescr';

const App = () => {
    return (
        <Router>
            <Header />
            <div className={styles.profileCard}>
                <ProfileCard />
                <Routes>
                    <Route path="/" element={<MainScreanProfile />} />
                    <Route path="/profile" element={<UserProfileScreean />} />
                    <Route path="/library" element={<MainLibrary />} />
                    <Route path="/library/description" element={<ItemLibraryDescr/>} />
                </Routes>
            </div>

        </Router>
    );
};

export default App;

