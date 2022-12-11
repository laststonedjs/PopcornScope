import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Movies, Shows, Search } from './pages';

export default function App() {
  return (
    <div>
      <Routes>


        <Route path="movies" element={<Movies />}></Route>
        <Route path="/movies/shows" element={<Shows />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies/shows/search" element={<Search />}></Route>

        {/* <Route path="/browse" element={<Browse />} /> */}
      </Routes >
    </div>
  );
}
