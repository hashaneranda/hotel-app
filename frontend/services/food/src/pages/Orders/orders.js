import React, { useState, useEffect } from "react";
import { useFoods } from "@hotel/api";
import { auth$ as auth } from "@hotel/auth-helper";

// components
import OrderItem from "../../common/components/OrderItem/OrderItem";

// styles
import { FoodWrapper } from "./styles";

const foods = [
  {
    id: "32312adadwad",
    order: [
      {
        food: {
          name: "MeeGroang",
          price: 45,
          image:
            "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
        },
        quantity: 2,
      },
      {
        food: {
          name: "MeeGroang",
          price: 45,
          image:
            "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
        },
        quantity: 2,
      },
    ],
    createdAt: "2012-01-02",
  },
  {
    id: "32312adadwad",
    order: [
      {
        food: {
          name: "MeeGroang",
          price: 45,
          image:
            "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
        },
        quantity: 2,
      },
      {
        food: {
          name: "MeeGroang",
          price: 45,
          image:
            "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
        },
        quantity: 2,
      },
      {
        food: {
          name: "MeeGroang",
          price: 45,
          image:
            "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
        },
        quantity: 2,
      },
      {
        food: {
          name: "MeeGroang",
          price: 45,
          image:
            "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
        },
        quantity: 2,
      },
    ],
    createdAt: "2012-01-02",
  },
];

export default function Orders(props) {
  const [user, setUser] = useState("");
  const [fetchOrders, { error, data, loading }] = useFoods();

  // const foods = useMemo(() => mapFoods(data), [data]);

  useEffect(() => {
    fetchOrders();

    auth.subscribe(({ user }) => {
      setUser(user);
    });
  }, []);

  return (
    <div>
      <p>Hello, {!!user ? user?.name : ""} 👏</p>
      <h3>My Orders</h3>
      <FoodWrapper>
        {foods.map((food) => (
          <OrderItem
            id={food.id}
            order={food.order}
            createdAt={food.createdAt}
          />
        ))}
      </FoodWrapper>
    </div>
  );
}
