import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "./../lib/client";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <div>
        <h2 className="products-heading">
          Best selling products
          <p>cake 1</p>
        </h2>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2", "Product 3"].map((product) => product)}
      </div>
      <FooterBanner />
    </div>
  );
};

export default Home;
