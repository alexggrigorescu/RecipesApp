import React, { useState, useEffect } from "react";
import "./styles.css";

import Button from "../Button";

import { useDetails } from "../../contexts/DetailsContext";

export default function Card({ id, title, image, ingredients, ...recipe }) {
  const [showDetails, setShowDetails] = useState(false);

  const { setRecipe } = useDetails();

  const onClick = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  };

  useEffect(() => {
    if (showDetails) {
      setRecipe(recipe);
      setTimeout(
        () =>
          window.scrollBy({
            top: 800,
            left: 0,
            behavior: "smooth",
          }),
        200
      );
    } else {
      setRecipe("");
    }
  }, [showDetails]);

  return (
    <div className="card-wrapper">
      <img className="preview-image" src={image} alt="Recipe Preview" />
      <h4 id="carousel-card-title">{title}</h4>
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
