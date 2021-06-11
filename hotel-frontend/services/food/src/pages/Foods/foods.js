import React, { useContext, useMemo, useEffect, useState } from "react";
import { useFoods } from "@hotel/api";
import { auth$ as auth } from "@hotel/auth-helper";
import CircularProgress from "@material-ui/core/CircularProgress";

// context
import { CartContext } from "../../common/context/cartContext";
// components
import FoodCard from "../../common/components/FoodCard/foodCard";

// styles
import { FoodWrapper, InfoContainer, InfoWrapper } from "./styles";

const mapFoods = (data) => {
  if (data) return data?.fetchAllFoods?.data;
  return [];
};

export default function Food() {
  const [user, setUser] = useState("");
  const { addProduct } = useContext(CartContext);
  const [fetchFoods, { error, data, loading }] = useFoods();

  const foods = useMemo(() => mapFoods(data), [data]);

  useEffect(() => {
    fetchFoods();

    auth.subscribe(({ user }) => {
      setUser(user);
    });
  }, []);

  if (loading)
    return (
      <InfoContainer>
        <InfoWrapper>
          <CircularProgress />
          <h2>Fetching food items...</h2>
        </InfoWrapper>
      </InfoContainer>
    );

  return (
    <div>
      <p>Hello, {!!user ? user?.name : ""} 👏</p>
      <h3>Find your favorite food!</h3>
      <FoodWrapper>
        {foods.length > 0 ? (
          foods.map((food) => (
            <FoodCard
              name={food.name}
              price={food.price}
              image={food.image}
              buttonAction={() => addProduct(food)}
            />
          ))
        ) : (
          <h1>No food items available.</h1>
        )}
      </FoodWrapper>
    </div>
  );
}
