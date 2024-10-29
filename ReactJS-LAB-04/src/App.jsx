import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Forbidden from './components/Forbidden';
import NotFound from './components/NotFound';
import './App.css';

const App = () => {
  const userHasAccess = false; // для примера, устанавливаем флаг доступа

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={userHasAccess ? <About /> : <Navigate to="/403" />} />
        <Route path="/403" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
