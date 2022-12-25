import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Kurs from './pages/Kurs';
import Login from './pages/Login';
import NotFaund from './pages/NotFound';
import Signup from './pages/Signup';


function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kurslar/:id" element={<Kurs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFaund />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
