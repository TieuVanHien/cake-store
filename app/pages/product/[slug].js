import React, { useState } from "react";
import { urlFor, client } from "../../lib/client";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { Button } from "@mui/material";
import { ProductImage } from "../../components";
import { useStateContext } from "../../context/StateContext";

export const ProductDetails = ({ product, products }) => {
  const [index, setIndex] = useState(0);
  const { minusQty, plusQty, quantity, onAdd } = useStateContext();

  return (
    <div className="product-container">
      <div className="product">
        <div className="image-container">
          <img className="main-product" src={urlFor(product.image[index])} />
          <div className="small-images-container">
            <div className="image">
              {product.image?.map((item, i) => (
                <img
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  alt=""
                  src={urlFor(item)}
                  key={i}
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
            <p style={{ width: "70%", marginTop: "5em" }}>
              <b>Description</b>: {product.details}
            </p>
          </div>
        </div>
        <div className="product-detail-desc">
          <h2>{product.name}</h2>
          <p className="price">Price: ${product.price}</p>
          <div className="reviews">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <div className="checkout">
            <div className="quantity">
              <p className="quantity-desc">
                <span className="minus" onClick={minusQty}>
                  <AiOutlineMinus cursor="pointer" color="red" />
                </span>
                <span className="num">{quantity}</span>
                <span className="plus" onClick={plusQty}>
                  <AiOutlinePlus cursor="pointer" color="green" />
                </span>
              </p>
            </div>
            <Button className="button" onClick={() => onAdd(product, quantity)}>
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="maylike-products">
        <h4>You May Also Like</h4>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <ProductImage key={item._id} product={item} />
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
