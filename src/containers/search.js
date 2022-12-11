import React from "react";
import { Header } from "../components";
import logo from "../constants/images/header/icons-search-more.png";

const SearchContainer = () => {

  return (
    <Header.Frame>
      <Header.Bounce>
        <Header.Search
          to='/movies/shows/search'
          src={logo}
          alt="search"
        />
      </Header.Bounce>
    </Header.Frame>
  );
}

export default SearchContainer;