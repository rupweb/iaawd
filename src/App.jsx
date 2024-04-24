import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContent from './pages/MainContent';
import Governance from './pages/Governance';
import Contact from './pages/Contact';
import Sign from './pages/Sign';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/governance" element={<Governance/>} />
      <Route path="/signup" element={<Sign/>} />
    </Routes>
  );
}

export default App;
