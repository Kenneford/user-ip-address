import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowIP from './ShowIP';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/user-ip' element={<ShowIP />} />
        </Routes>
    </React.StrictMode>
    </Router>
);
