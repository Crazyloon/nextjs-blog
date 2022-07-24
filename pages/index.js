import Head from "next/head";
import { siteTitle } from "../components/layout/layout";
import Link from "next/link";
import Date from "../components/utilities/date";
import { getSortedPostsData } from "../lib/posts";
import AuthorHeader from "../components/utilities/author-header";
import PageLayout from "../components/layout/content-layout";
import Topography from "../components/patterns/topography";
import Banner from "../components/headers/banner";

const pageHeading = "Welcome to the Loony Blog!";

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Banner title={pageHeading} pattern={Topography}>
        <p>
          Hi, I'm Russell Dow. I'm a software developer, husband, vlogger,
          blogger, and a PNW native. I write about my life, share tips on
          getting started in software development, navigating the industry, and
          other random stuff about my life, including my latest vacations and
          culinary adventures.
        </p>
      </Banner>
      <PageLayout>
        <div className="mt-8 leading-6 my-6">
          <h2 className="text-2xl leading-5 my-6 text-font-color">
            Recent Posts
          </h2>
          <ul className="p-0 m-0 inline-flex flex-col">
            {allPostsData.map(({ slug, date, title }) => (
              <li className="mb-5 inline-flex flex-col" key={slug}>
                <Link href={`/blog/${slug}`}>
                  <a className="text-lg">{title}</a>
                </Link>
                <small className="text-font-secondary">
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
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
