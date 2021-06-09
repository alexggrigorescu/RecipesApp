import React, { useState, useEffect } from "react";

import { useCarousel } from "../../contexts/CarouselContext";

import SearchIcon from "@material-ui/icons/Search";

import "../Button/styles.css";
import "./styles.css";

export default function Search() {
  const [wordToSearch, setWordToSearch] = useState("random");

  const { searchParam, setSearchParam, getRecipes } = useCarousel();

  const searchFunction = () => {
    if (wordToSearch.length === 0) return alert("Empty field");
    setSearchParam(wordToSearch);
  };

  useEffect(() => {
    getRecipes();
  }, [searchParam]);

  return (
    <div className="searchBox">
      <input
        className="searchInput"
        type="text"
        placeholder="Search recipe"
        onChange={({ target: { value } }) => setWordToSearch(value)}
      />
      <button className="searchButton" onClick={searchFunction}>
        <SearchIcon />
      </button>
    </div>

    /* <div>
      <input
        style={{ margin: 20 }}
        id="searchInput"
        placeholder="Search recipe"
        onChange={({ target: { value } }) => setWordToSearch(value)}
      />
      <button className="button" onClick={searchFunction}>
        Search
      </button>
    </div> */
  );
}
