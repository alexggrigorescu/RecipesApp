import React, { useEffect } from "react";
import "./styles.css";

import { useDetails } from "../../contexts/DetailsContext";

export default function RecipeDetails() {
  console.log("recipe details LOG");

  const { recipe } = useDetails();
  console.log(recipe);

  const totalTime = () => {
    let minutes = parseInt(recipe.recipe.totalTime);
    if (minutes > 0) return `${minutes} minutes`;
    return "unknown";
  };

  const reduceDecimals = (item, nrOfDecimals) => {
    return parseFloat(item).toFixed(nrOfDecimals);
  };

  return (
    <>
      {recipe && (
        <>
          <h1>Title: {recipe.recipe.label}</h1>
          <h2>Cuisine: {recipe.recipe.cuisineType}</h2>
          <h4>Calories: {reduceDecimals(recipe.recipe.calories, 2)}</h4>
          <span>Quantity</span>
          <p>{recipe.recipe.totalWeight}</p>
          <img src={recipe.recipe.image} alt="Recipe Preview" />
          <br />
          <span>Ingredients:</span>
          <ul>
            {recipe.recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <span>Allergens</span>
          <ul>
            {recipe.recipe.cautions.map((allergen, index) => (
              <li key={index}>{allergen}</li>
            ))}
          </ul>
          <span>Nutrition Facts</span>
          <ul>
            {recipe.recipe.digest.map((item, index) => (
              <li key={index}>{`${item.label} : ${reduceDecimals(
                item.total,
                2
              )} ${item.unit}`}</li>
            ))}
          </ul>
          <span>Time to make</span>
          <p>{totalTime()}</p>
        </>
      )}
    </>
  );
}
