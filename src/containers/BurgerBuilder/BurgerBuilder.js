import React, { Component } from "react";
import styled from "styled-components";

class BurgerBuilder extends Component {
  render() {
    return (
      <Container>
        <div>Burger</div>
        <div>Burger Controls</div>
      </Container>
    );
  }
}

const Container = styled.section`
  margin-top: 16px;
`;

export default BurgerBuilder;
