import React, { useState } from 'react'
import { Header } from '../components';
import MovieContainer from '../components/movies/movies';
import { Link } from 'react-router-dom';
import HeaderContainer from '../containers/header';
import '../containers/browse/browse.css';

export default function Movies() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <HeaderContainer>
        <Header.Frame>
          <Header.Group>
            <Header.TextLink>Movies</Header.TextLink>
            <Link className='links' to="shows">TV Shows</Link>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </Header.Group>
        </Header.Frame>
      </HeaderContainer>
      <MovieContainer />
    </div>
  );
}