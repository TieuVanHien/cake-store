import React from "react";
import { Product, HeroBanner } from "../components";
import { client } from "./../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <div>
      {/* <HeroBanner heroBanner={bannerData.length && bannerData[0]} /> */}
      <div>
        <h2 className="products-heading">Best selling products</h2>
      </div>
      <div className="products-container">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query, { dataset: "production" });

  return {
    props: {
      products,
    },
  };
};

export default Home;
