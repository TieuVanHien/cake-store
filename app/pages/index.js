import React from "react";
import { Product } from "../components";
import { client } from "../lib/client";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Home = ({ products }) => {
  return (
    <div className="main">
      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
        >
          {products.map((product) => (
            <SwiperSlide key={product._id}>
              <Product product={product} />
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
