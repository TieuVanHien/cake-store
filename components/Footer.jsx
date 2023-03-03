import React from "react";
import { AiFillInstagram, AiOutlineFacebook } from "react-icons/ai";

export const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 Thuy Trang All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineFacebook />
      </p>
    </div>
  );
};
