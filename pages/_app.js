import "../styles/global.css";
import { useEffect, React } from "react";
import Layout from "../components/layout/layout";
import { useRouter } from "next/router";
import ScrollToTop from "../components/utilities/scroll-to-top";
import { AchievementProvider } from "../components/achievements/achievement-context";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function MyApp({ Component, pageProps }) {
  const route = useRouter();

  return (
    <AchievementProvider>
      <Layout home={route.pathname === "/"}>
        <Component {...pageProps} />
      </Layout>
      <ScrollToTop />
    </AchievementProvider>
  );
}
