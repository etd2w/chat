import React from "react";
import styled from "styled-components";

import Chat from "./Chat";
import Sidebar from "./Sidebar";

const HomeStyled = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  .buttonWithIcon {
    display: flex;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const Home = () => {
  return (
    <HomeStyled>
      <Sidebar />
      <Chat />
    </HomeStyled>
  );
};

export default Home;
