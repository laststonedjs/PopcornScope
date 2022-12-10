import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Movies, Shows } from './pages';

export default function App() {
  return (
    <div>
      <Routes>


        <Route path="movies" element={<Movies />}></Route>
        <Route path="/shows" element={<Shows />}></Route>
        <Route path="/" element={<Home />}></Route>

        {/* <Route path="/browse" element={<Browse />} /> */}
      </Routes >
    </div>
  );
}
