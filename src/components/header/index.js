import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Background,
  Container,
  Link,
  Logo,
  Feature,
  FeatureCallOut,
  Text,
  Group,
  Search,
  SearchLogo,
  SearchIcon,
  SearchInput,
  PlayButton,
  Bounce
} from "./styles/header";

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
}

// Header.Search = function HeaderSearch() {
//   const [searchActive, setSearchActive] = useState(false);
//   const [timeoutId, setTimeoutId] = useState();
//   const [content, setContent] = useState();
//   const [searchTerm, setSearchTerm] = useState('');
//   const [type, setType] = useState(0);

//   const fetchSearch = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/search/movie?api_key=4787c12f121422364a0dba37d88bc117&language=en-US&query=searchTerm&page=1&include_adult=false`
//     );

//     console.log(data.results);
//     setContent(data.results);
//   };

//   useEffect(() => {
//     fetchSearch();
//   }, [type]);

//   const onTextChange = (event) => {
//     clearTimeout(timeoutId);
//     setSearchTerm(event.target.value);
//     const timeout = setTimeout(() => console.log("API call"), 500);
//     setTimeoutId(timeout);
//   };

//   return (
//     <Search>
//       <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)}>
//         <img src="/images/icons/search.png" alt="Search" />
//       </SearchIcon>
//       <SearchInput
//         value={searchTerm}
//         onChange={onTextChange}
//         placeholder="Search Movie and TV Shows"
//         active={searchActive}
//       />
//     </Search>
//   )
// }

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  )
}

Header.Search = function HeaderSearch({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <SearchLogo {...restProps} />
    </ReactRouterLink>
  )
}

Header.Bounce = function HeaderBounce({ children, ...restProps }) {
  return (
    <Bounce {...restProps}>{children}</Bounce>
  )
}