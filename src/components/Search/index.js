import React, { useState, useEffect } from "react";

import { useCarousel } from "../../contexts/CarouselContext";

import "../Button/styles.css";

export default function Search() {
  const [wordToSearch, setWordToSearch] = useState("random");

  const { searchParam, setSearchParam, getRecipes } = useCarousel();

  const searchFunction = () => {
    setSearchParam(wordToSearch);
  };

  useEffect(() => {
    getRecipes();
  }, [searchParam]);

  return (
    <div>
      <label htmlFor="searchInput">Search post</label>
      <input
        style={{ margin: 20 }}
        id="searchInput"
        onChange={({ target: { value } }) => setWordToSearch(value)}
      />
      <button className="button" onClick={searchFunction}>
        Search
      </button>
    </div>
  );
}
