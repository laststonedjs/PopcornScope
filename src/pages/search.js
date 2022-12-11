import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// components
import { Header } from '../components';
import MovieContainer from '../components/movies/movies';
import HeaderSearch from '../components/search/search';
// containers
import HeaderContainer from '../containers/header';
// syles
import '../containers/browse/browse.css';
import SearchContainer from '../containers/search';

export default function Search() {

  return (
    <div>
      <HeaderContainer>
        <Header.Group>
          <div className='searchLink'>
            <Link className='link' to="/movies">Movies</Link>
            <Link className='link' to="/movies/shows">TV Shows</Link>
          </div>
        </Header.Group>
      </HeaderContainer>
    </div>
  );
}