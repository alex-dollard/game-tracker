import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';

export default function App() {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('token'));

  const handleLogin = (jwt: string) => {
    localStorage.setItem('token', jwt);
    setToken(jwt);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={
          token ? <Navigate to="/" /> : <LoginPage onLogin={handleLogin} />
        } />
        <Route path="/register" element={
          token ? <Navigate to="/" /> : <RegisterPage />
        } />
        <Route path="/" element={
          token ? <HomePage token={token} onLogout={handleLogout} /> : <Navigate to="/login" />
        } />
      </Routes>
    </BrowserRouter>
  )
}