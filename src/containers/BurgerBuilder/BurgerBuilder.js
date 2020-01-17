import React, { Component } from "react";
import styled from "styled-components";

import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 2,
      meat: 1
    }
  };

  render() {
    return (
      <Container>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Controls</div>
      </Container>
    );
  }
}

const Container = styled.section`
  margin-top: 16px;
`;

export default BurgerBuilder;
