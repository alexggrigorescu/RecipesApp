import React, { useState, useEffect } from "react";
import "./styles.css";

import { useCarousel } from "../../contexts/CarouselContext";
import { CarouselProvider } from "../../contexts/CarouselContext";
import HList from "../../components/Hlist";

export default function Landing() {
  const APP_ID = "4e26749c";
  const APP_KEY = "a6e7bc7515cc4ef974fc8fcd4bee8121";

  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=soup&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  useEffect(() => {
    getRecipes();
    console.log("effect called");
  }, []);

  return <HList recipes={recipes} />;
}
