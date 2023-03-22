import React from "react";
import { Product } from "../components";
import { client } from "./../lib/client";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Home = ({ products, mayLikeProducts }) => {
  return (
    <div className="main">
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <Product
                key={product._id}
                product={product}
                mayLikeProducts={mayLikeProducts}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
