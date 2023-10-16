import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Logement from './pages/Logements';
import FourOFour from './pages/error404';
import APropos from './pages/APropos';
import "font-awesome/css/font-awesome.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<Home />} /> 
        <Route path='/dev-armand.github.io/kasa' element={<Home />} /> 
        <Route path='/Home' element={<Home />} /> 
        <Route path='/logement/:id' element={<Logement />} />
        <Route path='/APropos' element={<APropos />} />
        <Route path="*" element={<FourOFour />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

