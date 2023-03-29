import React from "react";
import { Layout } from "../components";
import { StateContext } from "../context/StateContext";

import "../styles/main.scss";

function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

module.exports = App;
