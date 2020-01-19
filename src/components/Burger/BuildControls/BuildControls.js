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
      {controls.map(item => (
        <BuildControl label={item.label} />
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
