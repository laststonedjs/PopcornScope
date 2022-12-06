import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import 'normalize.css';
import { GlobalStyles } from './global_styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route element={<GlobalStyles />} />
      <Route element={<App />} />
    </Routes>
  </BrowserRouter>,
);
