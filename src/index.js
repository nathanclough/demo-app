import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter, Route, Routes} from "react-router-dom"
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="profile" element={<Profile></Profile>}/>
        <Route path="*" element={<div>Invalid URL</div>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
