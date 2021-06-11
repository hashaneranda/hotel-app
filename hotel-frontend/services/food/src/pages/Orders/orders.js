import React, { useState, useEffect, useMemo } from "react";
import { useOrders } from "@hotel/api";
import { auth$ as auth } from "@hotel/auth-helper";
import CircularProgress from "@material-ui/core/CircularProgress";

// components
import OrderItem from "../../common/components/OrderItem/OrderItem";

// assets
import { noOrders } from "../../config/images";

// styles
import { FoodWrapper, InfoContainer, InfoWrapper } from "./styles";

const mapOrders = (data) => {
  if (data) return data?.fetchAllMyOrders?.data;
  return [];
};

export default function Orders(props) {
  const [user, setUser] = useState("");
  const [fetchOrders, { error, data, loading }] = useOrders();

  const foods = useMemo(() => mapOrders(data), [data]);

  useEffect(() => {
    fetchOrders();

    auth.subscribe(({ user }) => {
      setUser(user);
    });
  }, []);

  if (loading)
    return (
      <InfoContainer>
        <InfoWrapper>
          <CircularProgress />
          <h2>Fetching your orders...</h2>
        </InfoWrapper>
      </InfoContainer>
    );

  return (
    <div>
      <p>Hello, {!!user ? user?.name : ""} 👏</p>
      <h3>My Orders</h3>
      <FoodWrapper>
        {foods.length > 0 ? (
          foods.map((food) => (
            <OrderItem
              id={food.id}
              order={food.order}
              createdAt={food.createdAt}
            />
          ))
        ) : (
          <InfoContainer>
            <InfoWrapper>
              <img src={noOrders} alt="empty" />
              <h3>No Orders</h3>
            </InfoWrapper>
          </InfoContainer>
        )}
      </FoodWrapper>
    </div>
  );
}
