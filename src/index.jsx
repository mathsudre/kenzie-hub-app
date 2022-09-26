import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Global from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from './Providers/ApiRequests';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ApiProvider>
      <App/>
      <Global/> 
    </ApiProvider>           
    </BrowserRouter>  
  </React.StrictMode>
)
