import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Navigation/Navbar';

export default function AppRouter() {
  return (
    <BrowserRouter>
    
      <Navbar />
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/About" element= {<About/>} />
        </Routes>
    </BrowserRouter>
  );
}