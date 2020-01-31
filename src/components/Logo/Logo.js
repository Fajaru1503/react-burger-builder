import React from "react";
import styled from "styled-components";

import burgerLogo from "../../assets/images/logo/logo.png";

const logo = props => {
  return (
    <Logo height={props.height} marginBottom={props.marginBottom}>
      <img src={burgerLogo} alt="MyBurger" />
    </Logo>
  );
};

export default logo;

const Logo = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-sizing: border-box;
  height: ${props => (props.height ? props.height : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
  padding: 8px;

  img {
    height: 100%;
  }
`;
