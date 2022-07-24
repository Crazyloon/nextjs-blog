import Head from "next/head";
import { siteTitle } from "../components/layout/layout";
import Link from "next/link";
import Date from "../components/utilities/date";
import { getSortedPostsData } from "../lib/posts";
import AuthorHeader from "../components/utilities/author-header";
import PageLayout from "../components/layout/content-layout";
import Topography from "../components/patterns/topography";

const name = "Crazyloon";
export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="flex flex-col bg-hero-pattern relative border-b-secondary">
        <Topography />
        <h1 className="text-7xl font-extrabold leading[1.2] tracking[-0.05rem] mt-24 place-self-center">
          Welcome to the Loony Blog!
        </h1>
        <p className="max-w-3xl text-lg leading[1.2] tracking[-0.05rem] my-16 place-self-center">
          Hi, I'm Russell Dow. I'm a software developer, husband, vlogger,
          blogger, and a PNW native. I write about my life, share tips on
          getting started in software development, navigating the industry, and
          other random stuff about my life, including my latest vacations and
          culinary adventures.
        </p>
      </header>
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
