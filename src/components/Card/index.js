import React, { useState, useEffect } from "react";
import "./styles.css";

import Button from "../Button";

export default function Card({ title, image, ingredients }) {
  const [showDetails, setShowDetails] = useState(false);

  const onClick = () => {
    showDetails ? setShowDetails(false) : setShowDetails(true);
  };

  useEffect(() => {
    console.log(`onClick called ${showDetails}`);
  }, [showDetails]);

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
