import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

export const ProductImage = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product.slug.current}`}>
        <img
          src={urlFor(product.image && product.image[0])}
          className="product-image"
          alt="cart"
        />
      </Link>
    </div>
  );
};
