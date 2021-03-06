import React from "react";
import "./styles.css";

import { useDetails } from "../../contexts/DetailsContext";

export default function RecipeDetails() {
  const { recipe } = useDetails();

  const totalTime = () => {
    let minutes = parseInt(recipe.recipe?.totalTime);
    if (minutes > 0) return `${minutes / 60}`;
    return "unknown";
  };

  const reduceDecimals = (item, nrOfDecimals) => {
    return parseFloat(item).toFixed(nrOfDecimals);
  };

  return (
    <>
      {recipe && (
        <>
          <h1 id="recipe-title">{recipe.recipe?.label}</h1>
          <div id="details-container">
            <div id="info-allergens-container">
              <div
                className="background-recipe-cards"
                id="recipe-information-container"
              >
                <h2 id="recipe-cuisine">
                  Cuisine: {recipe.recipe?.cuisineType}
                </h2>
                <h4>Calories: {reduceDecimals(recipe.recipe?.calories, 2)}</h4>

                <p>Quantity: {reduceDecimals(recipe.recipe?.totalWeight, 2)}</p>
                <div className="background-recipe-cards" id="time-container">
                  <span>
                    Time to make: {reduceDecimals(totalTime(), 1)} hours
                  </span>
                </div>
              </div>
              <div className="background-recipe-cards" id="allergens-container">
                <span>Allergens</span>
                <ul>
                  {recipe.recipe?.cautions.map((allergen, index) => (
                    <li key={index}>{allergen}</li>
                  ))}
                </ul>
              </div>
              <div
                className="background-recipe-cards"
                id="ingredients-container"
              >
                <span>Ingredients:</span>
                <ul>
                  {recipe.recipe?.ingredientLines.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            </div>
            <br />

            <div
              className="background-recipe-cards"
              id="nutritionFacts-container"
            >
              <span>Nutrition Facts</span>
              <ul>
                {recipe.recipe?.digest.map((item, index) => (
                  <li key={index}>{`${item.label} : ${reduceDecimals(
                    item.total,
                    2
                  )} ${item.unit}`}</li>
                ))}
              </ul>
            </div>
            <img
              id="image-preview"
              src={recipe.recipe?.image}
              alt="Recipe Preview"
            />
          </div>
        </>
      )}
    </>
  );
}
