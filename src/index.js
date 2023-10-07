import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Logement from './pages/Logements';
import FourOFour from './pages/error404';
import APropos from './pages/APropos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<Home />} /> 
        <Route path='/Home' element={<Home />} /> 
        <Route path='/logement/:id' element={<Logement />} />
        <Route path='/error404' element={<FourOFour />} />
        <Route path='/APropos' element={<APropos />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

