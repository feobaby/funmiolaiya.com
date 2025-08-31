import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Center, Spinner } from '@chakra-ui/react';
import Homepage from './pages/Homepage.jsx';
import MoviesPage from './components/Movie/MoviesPage.jsx';
import './App.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Center minH="100vh" bg="#181818">
        <Spinner size="xl" color="white" thickness="10px" speed="1.0s" />
      </Center>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </Router>
  );
}
