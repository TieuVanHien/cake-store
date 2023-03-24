import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";
import Image from "next/image";

export const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <Image
          src={urlFor(heroBanner.image)}
          alt="cake"
          className="hero-banner-image"
        />
        <div>
          <Link href={`/prodcut/${heroBanner.product}`}>
            <button className="">{heroBanner.buttonText}</button>
          </Link>
        </div>
        <div className="desc">
          <h5>Description</h5>
          <p>{heroBanner.desc}</p>
        </div>
      </div>
    </div>
  );
};
