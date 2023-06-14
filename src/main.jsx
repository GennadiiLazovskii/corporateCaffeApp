import React from 'react'
import ReactDOM from 'react-dom/client'
import './globall.scss';
import App from './pages/App/App';
import { store } from './store/store';
import { Provider } from 'react-redux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
