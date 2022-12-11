import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// components
import { Header } from '../components';
import MovieContainer from '../components/movies/movies';
import HeaderSearch from '../components/search/search';
// containers
import HeaderContainer from '../containers/header';
import SearchContainer from '../containers/search';
// syles
import '../containers/browse/browse.css';

export default function Movies() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <HeaderContainer>
        <Header.Frame>
          <Header.Group>
            <Link className='activeLink' to="/movies">Movies</Link>
            <Link className='link' to="/movies/shows">TV Shows</Link>
          </Header.Group>
          <Header.Group>
            <SearchContainer>
            </SearchContainer>
            {/* <HeaderSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}>
            </HeaderSearch> */}
          </Header.Group>
        </Header.Frame>
      </HeaderContainer>
      <MovieContainer />
    </div>
  );
}