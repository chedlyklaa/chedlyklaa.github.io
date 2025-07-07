import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Games from './Games';
import PhysiotherapyProject from './components/PhysiotherapyProject';
import './App.css';

function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/games" element={<Games />} />
          <Route path="/physiotherapy" element={<PhysiotherapyProject />} />
        </Routes>
    
    </Router>
  );
}

export default App;
