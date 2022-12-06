import React from 'react';
import { BrowserRouter as Routes, Route } from 'react-router-dom';
// import { JumbotronContainer } from './containers/jumbotron';
import { Home, Browse } from './pages';
import * as ROUTES from './constants/routes';

export default function App() {
  return (
    <Routes>
      <Route exact path='/browse'>
        <Browse />
      </Route>
      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>
    </Routes>
  );
}
