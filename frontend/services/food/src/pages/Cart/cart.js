import React, { useContext } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Fab from "@material-ui/core/Fab";

// context
import { CartContext } from "../../common/context/cartContext";

// components
import CartItem from "../../common/components/CartItem/CartItem";

// styles
import { FoodWrapper, Container, CartSummary, CartHeader } from "./styles";

const foods = [
  {
    id: 1,
    name: "MeeGroang",
    price: 45,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
    buttonAction: () => console.log("item added"),
    quantity: 10,
  },
  {
    id: 1,
    name: "MeeGroang",
    price: 45,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
    buttonAction: () => console.log("item added"),
    quantity: 10,
  },
];

export default function Cart() {
  const user = "Jhon";
  const { total, cartItems, clearCart, removeProduct } =
    useContext(CartContext);

  return (
    <Container>
      <CartHeader>
        <div>
          <p>Hello, {user} 👏</p>
          <h3>My Cart</h3>
        </div>
        <Fab aria-label="clear" onClick={() => clearCart()}>
          <DeleteForeverIcon />
        </Fab>
      </CartHeader>

      <FoodWrapper>
        {cartItems.length > 0 ? (
          cartItems.map((food) => (
            <CartItem
              name={food.name}
              price={food.price}
              image={food.image}
              buttonAction={() => removeProduct(food)}
              quantity={food.quantity}
            />
          ))
        ) : (
          <h1>Cart Empty</h1>
        )}
      </FoodWrapper>
      <CartSummary></CartSummary>
    </Container>
  );
}
