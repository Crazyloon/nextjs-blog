import { MDXProvider } from "@mdx-js/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug } from "../../lib/posts";
import AuthorHeader from "../../components/utilities/author-header";
import PubInfo from "../../components/utilities/pub-info";
import Waves from "../../components/patterns/waves";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../components/headers/banner";

const isAbsoluteURL = (urlString) => {
  try {
    const url = new URL(urlString);

    if (url.origin !== new URL(document.URL, document.baseURI).origin) {
      return true;
    }
  } catch (error) {
    new URL(urlString, window.location.origin);
  }

  return false;
};

const ResponsiveImage = (props) => (
  <div className="aspect-video w-full">
    <Image
      alt={props.alt}
      width="100%"
      height="55%"
      layout="responsive"
      quality={100}
      {...props}
    />
  </div>
);

const IndentedParagraph = (props) => (
  <p className="indent-2">{props.children}</p>
);

const SmartLink = (props) => {
  const externalDomain = isAbsoluteURL(props.href);
  const url = externalDomain
    ? props.href
    : new URL(props.href, window.location.origin);

  return (
    <a
      href={props.href}
      target={!externalDomain ? "" : "_blank"}
      className="whitespace-nowrap"
    >
      {props.children}{" "}
      {externalDomain && <FontAwesomeIcon icon={faExternalLink} size="xs" />}
    </a>
  );
};

const components = {
  img: ResponsiveImage,
  a: SmartLink,
  // p: IndentedParagraph,
};

const WavePattern = (props) => (
  <div className="absolute left-0 top-8 flex h-16 w-full justify-start overflow-hidden sm:h-20 md:h-28 lg:h-32 xl:h-[12rem] ">
    <Waves
      className={`absolute flex h-full w-[100%] justify-center overflow-auto ${props.className}`}
    />
  </div>
);

export default function Post(props) {
  const { slug, meta } = props;

  const Article = dynamic(import(`/posts/${slug}.mdx`));
  const SubTitle = ({ subtitle }) => (
    <h3 className="mt-8 text-center font-bold md:text-lg lg:text-2xl xl:text-3xl">
      {subtitle}
    </h3>
  );

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>

      {/* <Banner pattern={WavePattern} title={meta.title} /> */}
      <WavePattern className="fill-secondary dark:fill-secondary" />
      <h1 className="tracking[-0.05rem] relative z-10 mt-24 text-center font-extrabold leading-none md:mt-36 md:text-5xl lg:text-6xl xl:mt-48 xl:text-7xl">
        {meta.title}
      </h1>
      {meta.subtitle && <SubTitle subtitle={meta.subtitle} />}

      <div className="relative m-auto mt-6 flex max-w-2xl flex-col md:mt-8 lg:mt-10">
        <article className="article prose mb-12 dark:prose-invert">
          <div className="text-thin mb-4 flex text-sm text-gray-200">
            <PubInfo
              author={meta.author}
              date={meta.date}
              readTime={meta.readTime}
              homepage={meta.homepage}
            />
          </div>
          <MDXProvider components={components}>
            <Article />
          </MDXProvider>
        </article>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { meta } = await getPostBySlug(params.slug);
  return {
    props: {
      meta,
      slug: params.slug,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
}
