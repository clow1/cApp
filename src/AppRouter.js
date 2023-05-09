import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import WomensApparel from './Components/WomensApparel'
import MensApparel from './Components/MensApparel'
import Navbar from './Navigation/Navbar';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route path ="/" element={<Home />} />
            <Route path ="/About" element= {<About/>} />
            <Route path ="/WomensApparel" element= {<WomensApparel/>} />
            <Route path ="/MensApparel" element={<MensApparel/>} />
        </Routes>
    </BrowserRouter>
  );
}