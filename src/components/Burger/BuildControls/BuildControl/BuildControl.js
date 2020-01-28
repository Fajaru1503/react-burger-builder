import React from "react";
import styled from "styled-components";

const BuildControl = props => {
  return (
    <BuildContainer>
      <BuildLabel>{props.label}</BuildLabel>
      <ButtonLess onClick={props.removed} disabled={props.disabled}>
        Less
      </ButtonLess>
      <ButtonMore onClick={props.added}>More</ButtonMore>
    </BuildContainer>
  );
};

export default BuildControl;

const BuildContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

const BuildLabel = styled.label`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`;

const ButtonLess = styled.button`
  background-color: #d39952;
  color: white;
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
  text-align: center;

  &:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;

    &:hover {
      background-color: #ac9980;
      color: #ccc;
      cursor: not-allowed;
    }
  }

  &:hover,
  &:active {
    background-color: #daa972;
    color: white;
  }
`;

const ButtonMore = styled.button`
  background-color: #8f5e1e;
  color: white;
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #aa6817;
  cursor: pointer;
  outline: none;
  text-align: center;

  &:disabled {
    background-color: #ac9980;
    border: 1px solid #7e7365;
    color: #ccc;
    cursor: default;

    &:hover {
      background-color: #ac9980;
      color: #ccc;
      cursor: not-allowed;
    }
  }

  &:hover,
  &:active {
    background-color: #99703f;
    color: white;
  }
`;
