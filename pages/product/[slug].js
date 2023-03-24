import React, { useState } from "react";
import { urlFor, client } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import Image from "next/image";

import { Product } from "../../components";
import { useStateContext } from "../../context/StateContext";

export const ProductDetails = ({ product, products }) => {
  const [index, setIndex] = useState(0);
  const { minusQty, plusQty, quantity, onAdd } = useStateContext();

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <Image
              className="product-detail-image"
              src={urlFor(product.image[index])}
            />
          </div>
        </div>
        <div className="small-images-container">
          {product.image?.map((item, i) => (
            <Image
              className={
                i === index ? "small-image selected-image" : "small-image"
              }
              src={urlFor(item)}
              key={i}
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
        <div className="product-detail-desc">
          <h1>{product.name}</h1>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        </div>
        <div>
          <p className="price">${product.price}</p>
        </div>
        <div className="quantity">
          <h3>Quantity</h3>
          <p className="quantity-desc">
            <span className="minus" onClick={minusQty}>
              <AiOutlineMinus />
            </span>
            <span className="num">{quantity}</span>
            <span className="plus" onClick={plusQty}>
              <AiOutlinePlus />
            </span>
          </p>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="add-to-cart"
            onClick={() => onAdd(product, quantity)}
          >
            Add To Cart
          </button>
        </div>
      </div>
      <div className="maylike-products-wrapper ">
        <h2>You May Also Like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[type == 'product'] {
        slug {
            current

        }
    }`;
  const products = await client.fetch(query);
  const paths = products.map((product) => ({
    pararms: {
      slug: product.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query, { dataset: "production" });
  const products = await client.fetch(productsQuery, { dataset: "production" });

  return {
    props: {
      products,
      product,
    },
  };
};

export default ProductDetails;
