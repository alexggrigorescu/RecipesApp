import React, { memo } from "react";
import "../Button/styles.css";

function SearchButton({ onClick }) {
  console.log("render SearchButton");

  return (
    <button className="button" onClick={onClick}>
      Clear
    </button>
  );
}

SearchButton.propTypes = {};

export default memo(SearchButton);
