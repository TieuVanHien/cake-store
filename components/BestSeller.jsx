import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

export const BestSeller = ({ popular }) => {
  return (
    <div className="best-seller">
      <h2>Our Best Seller</h2>
      {popular && popular.slug && (
        <Link href={`/product/${popular.slug.current}`}>
          <img src={urlFor(popular.image && popular.image[0])} width={250} />
        </Link>
      )}
    </div>
  );
};
