import React from "react";
import styled from "styled-components";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  return (
    <Container>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </Container>
  );
};

const Container = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  height: 250px;
  margin: auto;
  overflow: auto;
  text-align: center;
  width: 100%;

  @media only screen and (min-width: 500px) and (min-height: 400px) {
    height: 450px;
    width: 400px;
  }

  @media only screen and (min-width: 1000px) and (min-height: 700px) {
    height: 600px;
    width: 700px;
  }
`;

export default burger;
