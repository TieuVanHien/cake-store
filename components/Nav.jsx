import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import { Cart } from "./Cart";
import { useStateContext } from "../context/StateContext";
import LocalMallIcon from "@mui/icons-material/LocalMall";

export const Nav = () => {
  const { showCart, setShowCart, totalQty } = useStateContext();

  return (
    <div className="navbar-container">
      <h4 className="logo">
        <Link href="/">Thuy Trang Cake</Link>
      </h4>
      <Button className="cart" onClick={() => setShowCart(true)}>
        <LocalMallIcon />
        <span className="cart-item-qty"> {totalQty}</span>
      </Button>

      {showCart && <Cart />}
    </div>
  );
};
