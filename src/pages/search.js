import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// components
import { Header } from '../components';
import SingleContent from '../components/single-content/singleContent';
// containers
import HeaderContainer from '../containers/header';
// styles
import '../containers/browse/browse.css';
import { SearchBox, SearchIcon, SearchInput } from "../components/search/search_style";
// assets
import searchIcon from '../constants/images/header/icons-search-more.png';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function Search() {
  const [type, setType] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [content, setContent] = useState();
  const [timeoutId, setTimeoutId] = useState();

  const fetchSearch = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=4787c12f121422364a0dba37d88bc117&language=en-US&query=${searchTerm}&page=1&include_adult=false`
    );

    console.log(data.results);
    setContent(data.results);

  };

  useEffect(() => {
    fetchSearch();
    // eslint-disable-next-line 
  }, [type]);


  const onSearchChange = (event) => {
    clearTimeout(timeoutId);
    setSearchTerm(event.target.value);
    const timeout = setTimeout(() => fetchSearch(event.target.value), 1000);
    setTimeoutId(timeout);
  };

  return (
    <div>
      <HeaderContainer>
        <Header.Frame>
          <Header.Group>
            <Link className='link' to="/movies">Movies</Link>
            <Link className='link' to="/movies/shows">TV Shows</Link>
          </Header.Group>
        </Header.Frame>
      </HeaderContainer>
      <div className='activeSearchContainer'>
        <div className='activeSearch'>
          <SearchBox>
            <SearchIcon>
              <img src={searchIcon} alt="Search" />
            </SearchIcon>
            <Header.Group>
              <SearchInput
                placeholder="Search Movie and TV Shows"
                active={true}
                onChange={onSearchChange}
              />
            </Header.Group>
          </SearchBox>
        </div>
      </div>
      <div className='tabContainer'>
        <Tabs
          style={{ paddingBottom: 5 }}
          value={type}
          indicatorColor='secondary'
          textColor='secondary'
          onChange={(event, newValue) => {
            setType(newValue);
          }}
        >
          <Tab style={{ width: '40%' }} label="Movie Results" />
          <Tab style={{ width: '40%' }} label="TV Shows Results" />
        </Tabs>
      </div>
      <div className='top-rated-movies'>
        {content && content.map((c) => (
          <SingleContent
            key={c.id}
            id={c.id}
            poster={c.poster_path}
            title={c.title || c.name}
            overview={c.overview}
            date={c.release_date || c.first_air_date}
            vote_average={c.vote_average}
            media_type={type ? "tv" : "movie"}
          />
        ))}
        {searchTerm &&
          !content &&
          (type ? <h2>No TV Shows found..</h2> : <h2>No Movies found..</h2>)}
      </div>
    </div>
  );
}