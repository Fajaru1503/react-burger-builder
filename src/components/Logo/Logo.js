import React from "react";
import styled from "styled-components";

import burgerLogo from "../../assets/images/logo/logo.png";

const logo = props => {
  return (
    <Logo height={props.height}>
      <img src={burgerLogo} alt="MyBurger" />
    </Logo>
  );
};

export default logo;

const Logo = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  height: ${props => props.height};
  padding: 8px;

  img {
    height: 100%;
  }
`;
