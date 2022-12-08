import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../constants/images/header_logo.png";

const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} alt="PopcornScope" src={logo} />
        {/* <Header.Button /> */}
      </Header.Frame>
      {children}
    </Header>
  );
}

export default HeaderContainer;