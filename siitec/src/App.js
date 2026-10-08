// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { LanguageProvider } from './i18n/LanguageContext';
import './styles/theme.css';
import './styles/App.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
