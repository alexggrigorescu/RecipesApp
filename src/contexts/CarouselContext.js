import React, { useState, useContext } from "react";

export const CarouselContext = React.createContext();

export function useCarousel() {
  return useContext(CarouselContext);
}

export function CarouselProvider({ children }) {
  const APP_ID = "4e26749c";
  const APP_KEY = "a6e7bc7515cc4ef974fc8fcd4bee8121";

  const [recipes, setRecipes] = useState([]);
  const [searchParam, setSearchParam] = useState("random");

  const getRecipes = () =>
    fetch(
      `https://api.edamam.com/search?q=${searchParam}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setRecipes(data.hits));

  const value = {
    recipes,
    getRecipes,
    searchParam,
    setSearchParam,
  };

  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
}
