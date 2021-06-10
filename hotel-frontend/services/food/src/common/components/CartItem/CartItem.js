import React from "react";
import { Button } from "@hotel/styleguide";
import CloseIcon from "@material-ui/icons/Close";

// styles
import {
  Card,
  CardBody,
  CloseIconWrapper,
  CardDetails,
  CardDetailsWrapper,
  CardDetailsAction,
} from "./styles";

const CartItem = ({ name, price, image, buttonAction, quantity }) => {
  return (
    <Card>
      <CloseIconWrapper onClick={buttonAction}>
        <CloseIcon />
      </CloseIconWrapper>
      <CardBody>
        <img src={image} alt={`${name}-image`} />
        <CardDetails>
          <CardDetailsWrapper>
            <p className="title">{name}</p>
            <h5 className="price">${price}</h5>
          </CardDetailsWrapper>
          <CardDetailsAction>
            <h2 className="quantity">x{quantity}</h2>
          </CardDetailsAction>
          <CardDetailsAction>
            <h2 className="total_price">$ {price}</h2>
          </CardDetailsAction>
        </CardDetails>
      </CardBody>
    </Card>
  );
};

export default CartItem;
