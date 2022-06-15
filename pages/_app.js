import "../styles/global.css";
import React from "react";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import ScrollToTop from "../components/utilities/scroll-to-top";

export default function MyApp({ Component, pageProps }) {
  const route = useRouter();

  return (
    <>
      <Layout home={route.pathname === "/"}>
        <Component {...pageProps} />
      </Layout>
      <ScrollToTop />
    </>
  );
}
