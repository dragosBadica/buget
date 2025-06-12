import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Terms from './pages/Terms';
import GDPR from './pages/GDPR';

function App() {
  return (
    <Router>
      {/* Google Tag Manager (noscript) placeholder */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/gdpr" element={<GDPR />} />
      </Routes>
    </Router>
  );
}

export default App;