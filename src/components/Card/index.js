import React, { useState, useEffect } from "react";
import "./styles.css";

import Button from "../Button";

import { useDetails } from "../../contexts/DetailsContext";

export default function Card({ id, title, image, ingredients, ...recipe }) {
  const [showDetails, setShowDetails] = useState(true);

  const { setRecipe } = useDetails();

  const onClick = () => {
    setRecipe(recipe);

    setTimeout(
      () =>
        window.scrollBy({
          top: 900,
          left: 0,
          behavior: "smooth",
        }),
      200
    );
  };

  return (
    <div className="card-wrapper">
      <img className="preview-image" src={image} alt="Recipe Preview" />
      <h4>{title}</h4>
      <hr />
      <ul className="body-text">
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <div className="recipe-button">
        <Button text="Show details" onClick={onClick} />
      </div>
    </div>
  );
}
