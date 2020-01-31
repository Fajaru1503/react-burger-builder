import React from "react";
import styled from "styled-components";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => {
  return (
    <Header>
      <div onClick={props.opened}>MENU</div>
      <Logo height="80%" />
      <nav>
        <NavigationItems />
      </nav>
    </Header>
  );
};

export default toolbar;

const Header = styled.header`
  align-items: center;
  background-color: #703b09;
  box-sizing: border-box;
  display: flex;
  height: 56px;
  justify-content: space-between;
  left: 0;
  padding: 0 20px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 90;

  nav {
    display: none;
    height: 100%;

    @media only screen and (min-width: 500px) {
      display: block;
    }
  }
`;
