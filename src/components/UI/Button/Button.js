import React from "react";
import styled from "styled-components";

const button = props => {
  return (
    <Button buttonType={props.buttonType} onClick={props.clicked}>
      {props.children}
    </Button>
  );
};

export default button;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => {
    switch (props.buttonType) {
      case "Danger":
        return "red";
      case "Success":
        return "green";
      default:
        return "black";
    }
  }};
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;
