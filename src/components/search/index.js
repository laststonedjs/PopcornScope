import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";

import {
  Background,
  Link,
  Icon,
} from "./search_style";


export default function Search({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Search.Icon = function SearchIcon({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Icon {...restProps} />
    </ReactRouterLink>
  )
}