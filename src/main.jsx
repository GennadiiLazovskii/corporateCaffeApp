import React from 'react'
import ReactDOM from 'react-dom/client'
import './globall.scss';
import Header from './components/Header/Header';
import MainPages from './pages/mainPages/MainPages';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <MainPages />
  </React.StrictMode>,
)
