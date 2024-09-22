import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Registrasi from "./pages/Registrasi";
import ThemeProvider from "./context/ThemeContext";
import UserContext from "./context/UserContext"; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  
  const [user, setUser] = useState(null);  

  const changeUser = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);  
  };

  return (
    <BrowserRouter>
      <ThemeProvider>
        <UserContext.Provider value={{ user, changeUser }}>
          <div className="App">
            <nav className="navbar">
              <div className="navbar-container">
              <img src="/images/logo.png" alt="Logo" className="register-logo" />
                <ul className="navbar-menu">
                  <li><Link to="/" className="navbar-item">Beranda</Link></li>
                  <li><Link to="/dashboard" className="navbar-item">Dashboard</Link></li>
                  <li><Link to="/register" className="navbar-item">Register</Link></li>
                  <li><Link to="/login" className="navbar-item">Akun</Link></li>
                </ul>
              </div>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/registrasi" element={<Registrasi />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
