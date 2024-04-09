import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Shared/Login';
import Registration from './components/Registration';

function App() {
  
  return (
    <div className='bg-cover bg-center h-screen'>
      <div className="absolute bg-gradient-to-r from-gray-900 to-transparent opacity-50"></div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App


