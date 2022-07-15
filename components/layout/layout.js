import Head from "next/head";
import NavBar from "../navigation/nav-bar";

export const siteTitle = "Crazyloon's Blog";

export default function Layout({ children, home }) {
  return (
    <main className="h-screen">
      <NavBar />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Web Developers Blog" />
        <meta
          name="keywords"
          content="Junior, Developer, Web, Development, React, Tailwind, CSS, HTML, JavaScript, Next.JS, responsive, blog, introduction to web"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* <div className="max-w-3xl px-4 mx-auto mb-8"> */}
      <div className="layout max-w-3xl px-3 lg:px-0 mx-auto">{children}</div>
    </main>
  );
}
