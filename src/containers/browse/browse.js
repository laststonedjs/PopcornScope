import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../../components';
import './browse.css';

export function BrowseContainer() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header.Frame>
        <Header.Group>
          <Link className='links' to="movies">Movies</Link>
          <Link className='links' to="/movies/shows">TV Shows</Link>
        </Header.Group>
        <Header.Group>
          <Header.Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </Header.Group>
      </Header.Frame>
      <Header src="suspiria_img" dontShowOnSmallScreen>
        <Header.Feature>
          <Header.FeatureCallOut>
            Watch "Suspiria" - Dario Argento
          </Header.FeatureCallOut>
          <Header.Text>
            A young American dancer travels to Europe to join a famous ballet school.
            As she arrives, the camera turns to another young woman, who appears to be fleeing from the school.
            She returns to her apartment where she is gruesomely murdered by a hideous creature.
            Meanwhile, the young American is trying to settle in at the ballet school,
            but hears strange noises and is troubled by bizarre occurrences.
            She eventually discovers that the school is merely a front for a much more sinister organization.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  );
}