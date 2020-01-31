import React from "react";
import styled from "styled-components";

import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = () => {
  return (
    <Items>
      <NavigationItem link="/" active={true}>
        Burger Builder
      </NavigationItem>
      <NavigationItem link="/">Checkout</NavigationItem>
    </Items>
  );
};

export default navigationItems;

const Items = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media only screen and (min-width: 500px) {
    align-items: center;
    display: flex;
  }
`;
