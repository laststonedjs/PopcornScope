import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Browse } from './pages';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/browse" element={<Browse />} />
    </Routes>
  );
}
