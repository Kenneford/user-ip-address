import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import ShowIP from './ShowIP';
import logo from './sad-dog1.jpg'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
      <Routes>
        <Route path='/' element={<App />} exact />
        <Route path='/user-ip' element={<ShowIP />} />
        <Route path='*' element={
                <div className='ooops'>
                    <h1 className='empty-page-msg'>Ooops! There is nothing in here...😒</h1>
                    <Link to="/" ><button className='ooops-btn'>Go Back</button></Link>
                    <div className='ooops-img'>
                        <img src={logo} alt="sad-dog" />
                    </div>
                </div>
            } />
      </Routes>
    </HashRouter>
);
