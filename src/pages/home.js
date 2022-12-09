import React from "react";
import { BrowseContainer } from "../containers/browse/browse";
import HeaderContainer from "../containers/header";

export default function Home() {

  return (
    <>
      <HeaderContainer>
        <BrowseContainer />
      </HeaderContainer>
    </>
  );
}
