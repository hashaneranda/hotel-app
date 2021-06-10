import React from "react";
import { Button } from "@hotel/styleguide";

// styles
import { Card, CardBody } from "./styles";

const ProductCard = ({ name, price, image, buttonAction }) => {
  return (
    <Card>
      <img src={image} alt={`${name}-image`} />

      <CardBody>
        <p className="title">{name}</p>
        <h2 className="price">$ {price}</h2>
        <Button onClick={(e) => buttonAction(e)}>Add to cart</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
