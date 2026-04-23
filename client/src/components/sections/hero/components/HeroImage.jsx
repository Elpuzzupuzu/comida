// HeroImage.jsx
import React from "react";
import "../styles/HeroImage.css";
import heroImage from "../../../../assets/imgs/hero.jpg";

export function HeroImage() {
  return (
    <div className="hero-image">
      <div className="hero-image__wrapper">
        <img
          src={heroImage}
          alt="Premium burger with melted cheese and fresh ingredients"
          className="hero-image__img"
        />

        <div className="hero-image__fade-left"></div>
        <div className="hero-image__fade-bottom"></div>
      </div>

      <div className="hero-badge">
        <div className="hero-badge__inner">
          <span className="hero-badge__top">Carne</span>
          <span className="hero-badge__middle">100%</span>
          <span className="hero-badge__bottom">Premium</span>
        </div>
      </div>
    </div>
  );
}