import React, { useState, useEffect, useMemo } from "react";
import { useOrders } from "@hotel/api";
import { auth$ as auth } from "@hotel/auth-helper";

// components
import OrderItem from "../../common/components/OrderItem/OrderItem";

// styles
import { FoodWrapper } from "./styles";

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
      <div>
        <h2>Fetching your orders...</h2>
      </div>
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
          <h3>No Orders</h3>
        )}
      </FoodWrapper>
    </div>
  );
}
