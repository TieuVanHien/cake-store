import React from "react";
import { Layout } from "./../components";

require("@/styles/globals.css");
const { AppProps } = require("next/app");

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

module.exports = App;
