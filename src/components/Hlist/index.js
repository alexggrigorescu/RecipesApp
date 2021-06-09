import React from "react";
import "./styles.css";

import Carousel, { consts } from "react-elastic-carousel";

import Card from "../Card";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 5 },
];

export default function HList({ recipes }) {
  return (
    <div id="carousel-container">
      <h1 id="title-text">Recipes...</h1>
      <Carousel breakPoints={breakPoints}>
        {recipes.map((recipe, index) => (
          <Card
            id={index}
            key={index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredientLines}
            {...recipe}
          />
        ))}
      </Carousel>
    </div>
  );
}
