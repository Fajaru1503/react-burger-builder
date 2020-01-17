import React, { Component } from "react";
import styled from "styled-components";

import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Container>
        <Burger />
        <div>Burger Controls</div>
      </Container>
    );
  }
}

const Container = styled.section`
  margin-top: 16px;
`;

export default BurgerBuilder;
