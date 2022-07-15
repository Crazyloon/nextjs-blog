import Banner from "../../components/headers/banner";
import FeaturedPost from "../../components/headers/featured-post";
import { getSortedPostsData, getFeaturedPosts } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/utilities/date";

const PostsPage = ({ allPosts, featured }) => {
  return (
    <>
      <section>
        <Banner background={"img"}>
          <FeaturedPost post={featured[0]} />
        </Banner>
      </section>
      <section className="max-w-3xl px-4 mx-auto mb-8"></section>
      <section className="leading-6 my-6">
        <h2 className="text-2xl leading-5 my-6 text-font-color">
          Recent Posts
        </h2>
        <ul className="list-none p-0 m-0 inline-flex flex-col">
          {allPosts.map(({ id, date, title }) => (
            <li className="mb-5 inline-flex flex-col" key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-lg">{title}</a>
              </Link>
              <small className="text-secondary">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default PostsPage;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const featured = getFeaturedPosts();
  return {
    props: {
      allPosts,
      featured,
    },
  };
}
