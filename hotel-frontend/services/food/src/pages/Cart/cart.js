import React, { useContext, useState, useEffect, useMemo } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import Fab from "@material-ui/core/Fab";
import { useHistory } from "react-router-dom";
import { Button, errorNoty, successNoty } from "@hotel/styleguide";
import { useAddOrder } from "@hotel/api";
import { auth$ as auth } from "@hotel/auth-helper";

// context
import { CartContext } from "../../common/context/cartContext";

// components
import CartItem from "../../common/components/CartItem/CartItem";

// assets
import { emptyCart } from "../../config/images";

// styles
import {
  FoodWrapper,
  Container,
  CartSummary,
  CartHeader,
  InfoContainer,
  InfoWrapper,
} from "./styles";

const calcTotalPrice = (cart) => {
  let total = 0;

  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  return total;
};

export default function Cart() {
  const [user, setUser] = useState("");
  const history = useHistory();
  const { cartItems, clearCart, removeProduct } = useContext(CartContext);
  const totalPrice = useMemo(() => calcTotalPrice(cartItems), [cartItems]);

  const [addOrder, { error, data, loading }] = useAddOrder();

  useEffect(() => {
    auth.subscribe(({ user }) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    if (data) {
      clearCart();
      history.push("/app/orders");
      successNoty({ msg: "Your order has been placed." });
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      errorNoty({ msg: "Something went wrong! Please try again" });
    }
  }, [error]);

  const handleBuyNow = () => {
    if (cartItems.length > 0) {
      const payload = cartItems.map((item) => ({
        food: item.id,
        quantity: item.quantity,
      }));
      addOrder(payload);
    }
  };

  return (
    <Container>
      <CartHeader>
        <div>
          <p>Hello, {!!user ? user?.name : ""} 👏</p>
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
          <InfoContainer>
            <InfoWrapper>
              <img src={emptyCart} alt="empty" />
              <h1>Cart Empty</h1>
            </InfoWrapper>
          </InfoContainer>
        )}
      </FoodWrapper>
      {cartItems.length > 0 && (
        <CartSummary>
          <div>
            <h3>
              Total: <span>${totalPrice}</span>
            </h3>
          </div>
          <Button onClick={() => handleBuyNow()} disabled={loading}>
            {loading ? "Placing Order.." : "Buy Now"}
          </Button>
        </CartSummary>
      )}
    </Container>
  );
}
