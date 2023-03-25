import React from "react";
import Head from "next/head";
import { Nav } from "./Nav";

export const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Head>
        <title>Thuy Trang Store</title>
      </Head>
      <Nav />
      <main className="container">{children}</main>
    </section>
  );
};
