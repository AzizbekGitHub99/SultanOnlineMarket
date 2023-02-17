import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'boxicons/css/boxicons.min.css'
import 'antd/dist/reset.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import App from './App';
import InfoContextProvider from './Context/InfoContext';
import {BrowserRouter as Router} from "react-router-dom";
import { ToastContainer } from 'react-toastify';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <InfoContextProvider>
            <App />
        </InfoContextProvider>
        <ToastContainer />
    </Router>
);
