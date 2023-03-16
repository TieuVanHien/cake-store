import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

export const FooterBanner = ({ footerBanner }) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{footerBanner.discount}</p>
          <h3>{footerBanner.largeText1}</h3>
          <h3>{footerBanner.saleTime}</h3>
        </div>
        <div className="right">
          <p>{footerBanner.smallText}</p>
          <h3>{footerBanner.midText}</h3>
          <p>{footerBanner.desc}</p>
        </div>
        <img src={urlFor(footerBanner.image)} className="footer-banner-image" />
      </div>
    </div>
  );
};
