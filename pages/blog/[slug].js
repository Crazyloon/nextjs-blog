import { MDXProvider } from "@mdx-js/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { getAllPostSlugs, getPostBySlug } from "../../lib/posts";
import AuthorHeader from "../../components/utilities/author-header";
import PubInfo from "../../components/utilities/pub-info";
import WavyUnderline from "../../components/utilities/text/wavy-underline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";

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
  <div className="w-full aspect-video">
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

``;

export default function Post(props) {
  const { slug, meta } = props;

  const Article = dynamic(import(`/posts/${slug}.mdx`));
  const SubTitle = ({ subtitle }) => <h3>{subtitle}</h3>;

  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>

      <div className="mt-12 max-w-2xl flex flex-col m-auto">
        <AuthorHeader
          name={meta.author}
          avatar={meta.author}
          homepage={meta.homepage}
        />

        <article className="article prose dark:prose-invert mb-12">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tighter mt-4 mb-1">
            {meta.title}
          </h1>
          {meta.subtitle && <SubTitle subtitle={meta.subtitle} />}
          <div className="text-gray-200 text-thin text-sm mb-4 flex">
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
