import React from "react";
import { Layout } from "./../components";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

require("@/styles/globals.css");
const { AppProps } = require("next/app");

function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

module.exports = App;
