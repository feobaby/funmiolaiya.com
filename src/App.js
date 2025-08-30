import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/homepage.jsx';
import Loader from './components/loader/loader.component.jsx';
import './App.css';
import MoviesPage from './pages/movies/index.js';
import LanguagePage from './components/languages/language.js';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Homepage />} />
                 <Route path="/movies" element={<MoviesPage />} />
                     <Route path="/languages" element={<LanguagePage />} />
        </Routes>
      )}
    </Router>
  );
}
