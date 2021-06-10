import React from "react";

// components
import FoodCard from "../../common/components/FoodCard/foodCard";

// styles
import { FoodWrapper } from "./styles";

const foods = [
  {
    name: "MeeGroang",
    price: 45,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
    buttonAction: () => console.log("item added"),
  },
  {
    name: "MeeGroang",
    price: 45,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
    buttonAction: () => console.log("item added"),
  },
  {
    name: "MeeGroang",
    price: 45,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
    buttonAction: () => console.log("item added"),
  },
  {
    name: "MeeGroang",
    price: 45,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
    buttonAction: () => console.log("item added"),
  },
  {
    name: "MeeGroang",
    price: 45,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
    buttonAction: () => console.log("item added"),
  },
  {
    name: "MeeGroang",
    price: 45,
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/eggs-breakfast-avocado-1296x728-header.jpg",
    buttonAction: () => console.log("item added"),
  },
];

export default function Food(props) {
  const user = "Jhon";
  return (
    <div>
      <p>Hello, {user} 👏</p>
      <h3>Find your favorite food!</h3>
      <FoodWrapper>
        {foods.map((food) => (
          <FoodCard
            name={food.name}
            price={food.price}
            image={food.image}
            buttonAction={food.buttonAction}
          />
        ))}
      </FoodWrapper>
    </div>
  );
}
