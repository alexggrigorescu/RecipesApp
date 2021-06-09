import React, { useState, useContext } from "react";

export const DetailsContext = React.createContext();

export function useDetails() {
  return useContext(DetailsContext);
}

export function DetailsProvider({ children }) {
  const [recipeIndex, setRecipeIndex] = useState(0);
  const [recipe, setRecipe] = useState("");

  const value = {
    recipeIndex,
    setRecipeIndex,
    recipe,
    setRecipe,
  };

  return (
    <DetailsContext.Provider value={value}>{children}</DetailsContext.Provider>
  );
}
