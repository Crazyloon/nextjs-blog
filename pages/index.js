import Head from "next/head";
import { siteTitle } from "../components/layout/layout";
import Link from "next/link";
import Date from "../components/utilities/date";
import { getSortedPostsData } from "../lib/posts";
import AuthorHeader from "../components/utilities/author-header";
import PageLayout from "../components/layout/content-layout";
import Topography from "../components/patterns/topography";
import Banner from "../components/headers/banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import ArticleLink from "../components/cards/article-link";

const pageHeading = "Welcome to the Loony Blog!";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner title={pageHeading} pattern={Topography}>
        <AuthorHeader
          name="crazyloon"
          avatar="crazyloon"
          homepage="/"
          home={true}
        />
        <p>
          Hi, I'm Russell Dow. I'm a software developer, husband, vlogger,
          blogger, and a PNW native. I write about my life, share tips on
          getting started in software development, navigating the industry, and
          other random stuff about my life, including my latest vacations and
          culinary adventures.
        </p>
      </Banner>
      <PageLayout>
        <div className="my-6 mt-8 leading-6">
          <h2 className="text-font-color my-6 text-2xl leading-5">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {allPostsData.map(({ slug, date, title, excerpt }) => (
              <ArticleLink
                slug={slug}
                date={date}
                title={title}
                excerpt={excerpt}
              />
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
