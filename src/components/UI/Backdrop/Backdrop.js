import React from "react";
import styled from "styled-components";

const backdrop = props => {
  return props.show ? <Backdrop onClick={props.clicked} /> : null;
};

export default backdrop;

const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
`;
