import React from "react";

import Fragment from "../../../hoc/Fragment";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((item) => {
    return (
      <li key={item}>
        <span style={{ textTransform: "capitalize" }}>{item}</span>:{" "}
        {props.ingredients[item]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button buttonType="Danger" clicked={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button buttonType="Success" clicked={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default orderSummary;
