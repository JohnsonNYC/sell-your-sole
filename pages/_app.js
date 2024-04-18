import React from "react";
import Layout from "../components/Layout";
import "../styles/global.css";
import "animate.css";
import { UnifiedCheckoutProvider } from "../components/Context/UnifiedCheckoutContext";
import UnifiedCheckout from "../container/UnifiedCheckout.container";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <UnifiedCheckoutProvider>
        <UnifiedCheckout />
        <Component {...pageProps} />
      </UnifiedCheckoutProvider>
    </Layout>
  );
};

export default MyApp;
