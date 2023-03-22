import React from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { Button } from "@mui/material";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";

export const Product = ({ product }) => {
  const { minusQty, plusQty, quantity, onAdd } = useStateContext();

  return (
    <section className="product">
      <div className="container">
        <div className="card left">
          <div className="product-detail">
            <h2 className="product-name">{product.name}</h2>
            <h4 className="product-name">${product.price}</h4>
            <p style={{ width: "70%" }}>{product.details}</p>
          </div>
          <div className="review">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
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
            <Button
              variant="contained"
              className="add-to-cart"
              onClick={() => onAdd(product, quantity)}
            >
              Add To Cart
            </Button>
          </div>
        </div>

        <div className="card right">
          <Link href={`/product/${product.slug.current}`}>
            <img
              src={urlFor(product.image && product.image[0])}
              width={250}
              height={250}
              className="product-image"
              alt="cart"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
