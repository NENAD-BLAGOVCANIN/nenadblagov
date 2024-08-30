import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import AppLayout from './layouts/AppLayout';
import Contact from './pages/contact/Contact';
import About from './pages/about/About';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const savedThemePreference = localStorage.getItem('themePreference');

    if (savedThemePreference === 'dark') {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('themePreference', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<AppLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
          <Route index element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
