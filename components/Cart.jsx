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

  // const handleCheckout = async () => {
  //   const stripe = await getStripe();

  //   const response = await fetch("/api/stripe", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ cartItems: cartItems || [] }),
  //   });

  //   console.log(response);

  //   // Extract the session ID from the response
  //   const session = await response.json();
  //   const sessionId = session.id;

  //   // Redirect to the Stripe checkout page with the session ID
  //   const result = await stripe.redirectToCheckout({ sessionId });
  //   if (result.error) {
  //     console.log(result.error.message);
  //   }
  // };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button className="cart-heading" onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQty} items)</span>
        </button>
        {cartItems.length < 1 && (
          <div className="empty-cart">
            <AiOutlineShopping />
            <h3>Your shopping cart is empty</h3>
            <Link href="/">
              <button onClick={() => setShowCart(false)} className="btn">
                Continue Shopping
              </button>
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
                  <button
                    className="remove-item"
                    onClick={() => onRemove(item)}
                  >
                    <TiDeleteOutline />
                  </button>
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
              <button className="btn" onClick={handleCheckOut}>
                Check Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
