import React from "react";
import styled from "styled-components";

import Fragment from "../../../hoc/Fragment";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <Drawer show={props.open}>
        <Logo height="11%" marginBottom="32px" />
        <NavigationItems />
      </Drawer>
    </Fragment>
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
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  width: 280px;
  z-index: 200;

  @media only screen and (min-width: 500px) {
    display: none;
  }
`;
