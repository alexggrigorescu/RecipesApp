import React, { useState } from "react";
import "./styles.css";

import Button from "../Button";
import RecipeDetails from "../RecipeDetails";

export default function Card({ title, image, ingredients }) {
  return (
    <div className="card-wrapper">
      <img className="preview-image" src={image} alt="Image preview" />
      <h4>{title}</h4>
      <hr />
      <ul className="body-text">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div className="recipe-button">
        <Button text="Show details" />
      </div>
    </div>
  );
}
