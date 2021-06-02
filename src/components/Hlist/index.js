import React, { useEffect } from "react";
import "./styles.css";

import Carousel from "react-elastic-carousel";

import Card from "../Card";
import ReceipDetails from "../RecipeDetails";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

export default function HList({ recipes }) {
  return (
    <>
      <Carousel breakPoints={breakPoints} itemsToShow={3} focusOnSelect={true}>
        {recipes.map((recipe) => (
          <Card
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
            {...recipe}
          />
        ))}
      </Carousel>
      {/* <ReceipDetails /> */}
    </>
  );
}
