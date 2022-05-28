import Head from "next/head";
import { siteTitle } from "../components/layout/layout";
import Link from "next/link";
import Date from "../components/utilities/date";
import { getSortedPostsData } from "../lib/posts";
import AuthorHeader from "../components/utilities/author-header";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const name = 'Crazyloon';
export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <AuthorHeader name={name} avatar={'crazyloon'} home/>

      <section className="text-3xl font-extrabold leading[1.2] tracking[-0.05rem] my-[1rem]">
        <p>
          Welcome to the LoonyBlog! Today, we're messing around with Tailwind CSS,
          converting all our existing css into Tailwind classes.
        </p>
      </section>

      <section className='leading-6 my-6'>
        <h2 className='text-2xl leading-5 my-6 text-font-color'>Recent Posts</h2>
        <ul className='list-none p-0 m-0 inline-flex flex-col'>
          {allPostsData.map(({ id, date, title }) => (
            <li className='mb-5 inline-flex flex-col' key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-lg">{title}</a>
              </Link>
              <small className='text-blue-100'>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
