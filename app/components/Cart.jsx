import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
  AiOutlineLeft,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { urlFor } from "../lib/client";
import { useStateContext } from "../context/StateContext";
import getStripe from "./../lib/getStripe";
import { Button } from "@mui/material";

export const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQty,
    cartItems,
    onRemove,
    setShowCart,
    toggleCartItemQuantity,
  } = useStateContext();

  const handleCheckOut = async (event) => {
    const stripe = await getStripe();
    const stripeSession = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    const sessionData = await stripeSession.json();
    const sessionId = sessionData.id;
    stripe.redirectToCheckout({ sessionId });
  };

  return (
    <div className="cart" ref={cartRef}>
      <div className="cart-container">
        <Button className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQty} items)</span>
        </Button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <h4 className="your-cart">Your shopping cart is empty</h4>
            <Link href="/">
              <Button onClick={() => setShowCart(false)} className="button">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0])}
                  className="cart-product-image"
                  alt="test"
                />
                <div>
                  <h5>{item.name}</h5>
                  <h4>${item.price}</h4>
                </div>
                <div>
                  <div>
                    <p className="quantity-desc">
                      <span
                        className="minus"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="num">{item.quantity}</span>
                      <span
                        className="plus"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      >
                        <AiOutlinePlus />
                      </span>
                    </p>
                  </div>
                  <Button
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </Button>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal:</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div>
              <Button className="checkout-button" onClick={handleCheckOut}>
                Check Out
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
