import React from 'react'
import ReactDOM from 'react-dom/client'
import './globall.scss';
import Header from './components/Header/Header';
import ProfileCard from './components/mainScreenProfile/profileCard/ProfileCard';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <ProfileCard/>
  </React.StrictMode>,
)
