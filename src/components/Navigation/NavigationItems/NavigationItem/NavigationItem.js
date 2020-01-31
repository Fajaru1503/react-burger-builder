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
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  margin: 0;
`;

const Link = styled.a`
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
  color: #fff;
  display: block;
  height: 100%;
  padding: 16px 10px;
  text-decoration: none;
  ${props => {
    if (props.active) {
      return `background-color: #8f5c2c;
      border-bottom: 4px solid #40a48c;
      color: #fff;`;
    }
  }}

  &:hover,
  &:active {
    background-color: #8f5c2c;
    border-bottom: 4px solid #40a48c;
    color: #fff;
  }
`;
