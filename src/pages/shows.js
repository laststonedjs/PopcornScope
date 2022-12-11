import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ShowsContainer from '../components/shows/shows';
import HeaderContainer from '../containers/header';
import { Header } from '../components';

export default function Shows() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <HeaderContainer>
        <Header.Frame>
          <Header.Group>
            <Link className='links' to="/movies">Movies</Link>
            <Link className='current' to="shows">TV Shows</Link>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          </Header.Group>
        </Header.Frame>
      </HeaderContainer>
      <ShowsContainer />
    </div>
  );
}