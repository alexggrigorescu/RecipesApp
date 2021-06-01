import React from "react";
import "./styles.css";
import IMG_1 from "../../assets/background1.jpg";

export default function Landing() {
  return (
    <div className="wrapper-container">
      <img id="first-image" src={IMG_1} />
    </div>
  );
}
