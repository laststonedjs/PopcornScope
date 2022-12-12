import React from "react";
import { Header } from "../components";
import HeaderContainer from "./header";
import logo from "../constants/images/header/icons-search-more.png";

const SearchContainer = () => {

  return (
    <div>
      <Header.Frame>
        <Header.Bounce>
          <Header.Search
            to='/movies/shows/search'
            src={logo}
            alt="search"
          />
        </Header.Bounce>
      </Header.Frame>
    </div>
  );
}

export default SearchContainer;