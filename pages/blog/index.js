import Banner from "../../components/headers/banner";
import FeaturedPost from "../../components/headers/featured-post";
import { getSortedPostsData, getFeaturedPosts } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/utilities/date";
import PageLayout from "../../components/layout/content-layout";
import Circuit from "../../components/patterns/circuit";

const blogHref = (slug) => `/blog/${slug}`;

const PostsPage = ({ allPosts, featuredPosts }) => {
  const featuredPost = featuredPosts[0];

  return (
    <>
      <Banner title={featuredPost.title} pattern={Circuit}>
        <p>{featuredPost.excerpt}</p>
        <a href={blogHref(featuredPost.slug)}>Read More</a>
      </Banner>
      <PageLayout className="leading-6 my-6">
        <h2 className="text-2xl leading-5 my-6 text-font-color">
          Recent Posts
        </h2>
        <ul className="list-none p-0 m-0 inline-flex flex-col">
          {allPosts.map(({ slug, date, title }) => (
            <li className="mb-5 inline-flex flex-col" key={slug}>
              <Link href={blogHref(slug)}>
                <a className="text-lg">{title}</a>
              </Link>
              <small className="text-font-secondary">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
};

export default PostsPage;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      allPosts,
      featuredPosts,
    },
  };
}
