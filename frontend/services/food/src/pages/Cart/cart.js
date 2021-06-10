import React from "react";

// components
import CartItem from "../../common/components/CartItem/CartItem";

// styles
import { FoodWrapper, Container, CartSummary } from "./styles";

const foods = [
  {
    name: "MeeGroang",
    price: 45,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
    buttonAction: () => console.log("item added"),
    quantity: 10,
  },
  {
    name: "MeeGroang",
    price: 45,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
    buttonAction: () => console.log("item added"),
    quantity: 10,
  },
];

export default function Cart(props) {
  const user = "Jhon";
  return (
    <Container>
      <div>
        <p>Hello, {user} 👏</p>
        <h3>My Cart</h3>
      </div>

      <FoodWrapper>
        {foods.map((food) => (
          <CartItem
            name={food.name}
            price={food.price}
            image={food.image}
            buttonAction={food.buttonAction}
            quantity={food.quantity}
          />
        ))}
      </FoodWrapper>
      <CartSummary></CartSummary>
    </Container>
  );
}
