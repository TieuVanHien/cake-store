import React from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import { Button } from "@mui/material";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

export const Product = ({ product }) => {
  const { minusQty, plusQty, quantity, onAdd } = useStateContext();

  return (
    <section className="product">
      <div className="container">
        <div className="card left">
          <div className="product-detail">
            <h3 className="product-name">{product.name}</h3>
            <h4 className="product-name">${product.price}</h4>
            <p style={{ width: "70%" }}>{product.details}</p>
          </div>
          <div className="review">
            <AiFillStar color="yellow" />
            <AiFillStar color="yellow" />
            <AiFillStar color="yellow" />
            <AiFillStar color="yellow" />
            <AiOutlineStar color="yellow" />
          </div>
          <div className="quantity">
            <h4>Quantity</h4>
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
          <div className="buttons">
            <Button
              variant="contained"
              className="add-to-cart"
              onClick={() => onAdd(product, quantity)}
            >
              Add To Cart
            </Button>
          </div>
          <p>Free 3-5 day shipping • Express Shipping</p>
          <div className="social-media">
            <Button className="icon">
              <Facebook style={{ color: "black" }} />
            </Button>
            <Button className="icon">
              <Instagram style={{ color: "black" }} />
            </Button>
            <Button className="icon">
              <Twitter style={{ color: "black" }} />
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
            <div className="more">
              <p className="more-btn"> More Products</p> <BsArrowRightCircle />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
