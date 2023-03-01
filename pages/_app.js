import React from "react";

require("@/styles/globals.css");
const { AppProps } = require("next/app");

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

module.exports = App;
