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