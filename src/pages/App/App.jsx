import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import MainScreanProfile from '../../components/mainScreenProfile/mainScreanProfile';
import UserProfileScreean from '../../components/userProfileScreean/UserProfileScreean';
import MainLibrary from '../../components/userLibrary/mainLibrary/MainLibrary';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<MainScreanProfile />} />
                <Route path="/profile" element={<UserProfileScreean />} />
                <Route path="/library" element={<MainLibrary />} />
            </Routes>
        </Router>
    );
};

export default App;

