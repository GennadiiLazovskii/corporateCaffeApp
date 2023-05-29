import React from 'react'
import ReactDOM from 'react-dom/client'
import './globall.scss';
import Header from './components/Header/Header';
import MainScreanProfile from './components/mainScreenProfile/mainScreanProfile';
import UserProfileScreean from './components/userProfileScreean/UserProfileScreean';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    {/* <MainScreanProfile/> */}
    <UserProfileScreean/>
  </React.StrictMode>,
)
