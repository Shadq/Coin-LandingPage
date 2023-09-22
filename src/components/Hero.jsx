import React from "react";
import logo from "../assets/logo.png";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero__container" id="hero">
      <div className="hero__image__container">
        <img src={logo} className="hero__image" />
      </div>
      <h1 className="hero__title">
        The <span className="hero__title__italic">Revolutionary</span> Coin
      </h1>
    </div>
  );
};

export default Hero;
