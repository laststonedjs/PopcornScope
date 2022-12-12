import React, { useState, useEffect } from "react";
import axios from "axios";
import { SearchBox, SearchIcon, SearchInput } from "./search_style";
import SingleContent from '../single-content/singleContent';
import searchIcon from '../../constants/images/header/icons-search-more.png';

export default function HeaderSearch() {
  const [searchActive, setSearchActive] = useState(false);
  const [timeoutId, setTimeoutId] = useState();
  const [content, setContent] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [type, setType] = useState(0);

  // const fetchSearch = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=4787c12f121422364a0dba37d88bc117&language=en-US&query=${searchTerm}&page=1&include_adult=false`
  //     );

  //     console.log(data.results);
  //     setContent(data.results);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // useEffect(() => {
  //   fetchSearch();
  // }, []);

  // const onTextChange = (event) => {
  //   clearTimeout(timeoutId);
  //   setSearchTerm(event.target.value);
  //   const timeout = setTimeout(() => fetchSearch(event.target.value), 1000);
  //   setTimeoutId(timeout);
  // };

  return (
    <>
      <SearchBox>
        <SearchIcon>
          <img src={searchIcon} alt="Search" />
        </SearchIcon>
        <SearchInput
          value={searchTerm}
          placeholder="Search Movie and TV Shows"
          active={true}
        />
      </SearchBox>
    </>
  )
}