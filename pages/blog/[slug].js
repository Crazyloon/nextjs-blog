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
    <a href={props.href} target={!externalDomain ? "" : "_blank"}>
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
  <div className="absolute left-0 top-8 flex h-[18rem] w-full justify-start overflow-hidden  2k:h-[24rem]">
    <Waves
      className={`absolute -left-96 flex h-[18rem] w-[2000px] justify-center overflow-auto lg:-left-48 2k:h-[24rem] 2k:w-[3000px] 4k:w-[4000px] ${props.className}`}
    />
  </div>
);

export default function Post(props) {
  const { slug, meta } = props;

  const Article = dynamic(import(`/posts/${slug}.mdx`));
  const SubTitle = ({ subtitle }) => <h3>{subtitle}</h3>;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>

      {/* <Banner pattern={WavePattern} title={meta.title} /> */}
      <WavePattern className="fill-secondary dark:fill-secondary" />
      <h1 className="leading[1.2] tracking[-0.05rem] font-shadow relative z-10 mx-auto mt-24 text-center font-extrabold text-zinc-800 drop-shadow-2xl dark:text-font-primary md:text-5xl lg:text-7xl">
        {meta.title}
      </h1>

      <div className="relative m-auto mt-12 flex max-w-2xl flex-col">
        <article className="article prose mb-12 dark:prose-invert">
          {meta.subtitle && <SubTitle subtitle={meta.subtitle} />}
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
