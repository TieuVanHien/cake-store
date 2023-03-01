import React from "react";
import Link from "next/link";

export const HeroBanner = () => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="">Small Text</p>
        <h3>Mid Text</h3>
        <img src="" alt="cake" className="hero-banner-image" />
        <div>
          <Link href="/product/id">
            <button className="">Button</button>
          </Link>
        </div>
        <div className="desc">
          <h5>Description</h5>
          <p>description</p>
        </div>
      </div>
    </div>
  );
};
