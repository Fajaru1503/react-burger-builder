import React from "react";
import styled from "styled-components";

const navigationItem = props => {
  return (
    <Item>
      <Link href={props.link} active={props.active}>
        {props.children}
      </Link>
    </Item>
  );
};

export default navigationItem;

const Item = styled.li`
  margin: 16px 0;
  width: 100%;

  @media only screen and (min-width: 500px) {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    margin: 0;
    width: auto;
  }
`;

const Link = styled.a`
  box-sizing: border-box;
  color: ${props => (props.active ? "#40a48c" : "#8f5c2c")};
  display: block;
  text-decoration: none;

  &:hover,
  &:active {
    color: #40a48c;
  }

  @media only screen and (min-width: 500px) {
    background-color: ${props => (props.active ? "#8f5c2c" : "transparent")};
    border-bottom: 4px solid
      ${props => (props.active ? "#40a48c" : "#transparent")};
    box-sizing: border-box;
    color: #fff;
    height: 100%;
    padding: 16px 10px;
    text-decoration: none;

    &:hover,
    &:active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a48c;
      color: #fff;
    }
  }
`;
