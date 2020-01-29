import React from "react";
import styled, { keyframes } from "styled-components";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <Controls>
      <p>Current Price: ${props.price}</p>
      {controls.map(item => (
        <BuildControl
          key={item.label}
          label={item.label}
          type={item.type}
          added={() => props.ingredientAdded(item.type)}
          removed={() => props.ingredientRemoved(item.type)}
          disabled={props.disabled[item.type]}
        />
      ))}
      <OrderButton disabled={!props.purchasable} onClick={props.ordered}>
        ORDER NOW
      </OrderButton>
    </Controls>
  );
};

export default BuildControls;

const Controls = styled.div`
  align-items: center;
  background-color: #cf8f2e;
  box-shadow: 0 2px 2px #ccc;
  display: flex;
  flex-flow: column;
  margin: auto;
  padding: 10px 0;
  width: 100%;
`;

const enable = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const OrderButton = styled.button`
  background-color: #dad735;
  outline: none;
  cursor: pointer;
  border: 1px solid #966909;
  color: #966909;
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;

  &::hover,
  &:active {
    background-color: #a0db41;
    border: 1px solid #966909;
    color: #966909;
  }

  &:disabled {
    background-color: #c7c6c6;
    cursor: not-allowed;
    border: 1px solid #ccc;
    color: #888888;
  }

  &:not(:disabled) {
    animation: ${enable} 0.3s linear;
  }
`;
