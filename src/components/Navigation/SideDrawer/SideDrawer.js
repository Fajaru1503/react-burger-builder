import React from "react";
import styled from "styled-components";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const sideDrawer = props => {
  return (
    <Drawer>
      <Logo height="11%" />
      <NavigationItems />
    </Drawer>
  );
};

export default sideDrawer;

const Drawer = styled.div`
  background-color: #fff;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  max-width: 70%;
  padding: 32px 16px;
  position: fixed;
  top: 0;
  transition: transform 0.3s ease-in-out;
  width: 280px;
  z-index: 200;

  @media only screen and (min-width: 500px) {
    display: none;
  }
`;
