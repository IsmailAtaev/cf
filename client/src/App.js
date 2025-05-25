import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import { useEffect } from 'react';
import HomePage from './pages/Home/Home';


export default function App() {

  const navigate = useNavigate('/login');

  useEffect(() => {
    navigate('/login')
  }, [])

  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />




    </Routes>
  );
}