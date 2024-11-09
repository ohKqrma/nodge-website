import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NodgeWebsite from './components/NodgeWebsite';
import Stage2 from './pages/Stage2';
import './styles/glitch.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NodgeWebsite />} />
        <Route path="/stage2" element={<Stage2 />} />
      </Routes>
    </Router>
  );
}

export default App;