import React, { useEffect } from "react";
import "./styles.css";

import HList from "../../components/Hlist";
import RecipeDetails from "../../components/RecipeDetails";

import { useCarousel } from "../../contexts/CarouselContext";

export default function Landing({ showDetails }) {
  const { recipes, getRecipes } = useCarousel();

  useEffect(() => {
    getRecipes();
    console.log("effect called with function getRecipes");
  }, []);

  return (
    <>
      <HList recipes={recipes} />
      <RecipeDetails />
    </>
  );
}
