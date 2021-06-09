import React from "react";

import "./styles.css";
import LOGO from "../../assets/logo.png";

import Search from "../Search";

export default function Header() {
  return (
    <div className="header">
      <img id="logo-image" src={LOGO} alt="Recipe App" />
      <Search />
    </div>
  );
}
