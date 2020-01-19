import React, { Component } from "react";
import styled from "styled-components";

import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BuildControls/BuildControls";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      meat: 0,
      bacon: 0
    }
  };

  render() {
    return (
      <Container>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls />
      </Container>
    );
  }
}

const Container = styled.section`
  margin-top: 16px;
`;

export default BurgerBuilder;
