import React from "react";
import styled from "styled-components";

const toolbar = props => {
  return (
    <Header>
      <div>MENU</div>
      <div>LOGO</div>
      <div>...</div>
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
`;
