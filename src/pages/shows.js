import React from 'react'
import { Link } from 'react-router-dom';
// components
import ShowsContainer from '../components/shows/shows';
import HeaderSearch from '../components/search/search';
import HeaderContainer from '../containers/header';
import { Header } from '../components';
// syles
import '../containers/browse/browse.css';
import SearchContainer from '../containers/search';

export default function Shows() {

  return (
    <div>
      <HeaderContainer>
        <Header.Frame>
          <Header.Group>
            <Link className='link' to="/movies">Movies</Link>
            <Link className='activeLink' to="/movies/shows">TV Shows</Link>
          </Header.Group>
          <Header.Group>
            <SearchContainer>
            </SearchContainer>
            {/* <HeaderSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            >
            </HeaderSearch> */}
          </Header.Group>
        </Header.Frame>
      </HeaderContainer>
      <ShowsContainer />
    </div>
  );
}