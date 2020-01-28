import React from "react";
import styled from "styled-components";

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
