import Banner from "../../components/headers/banner";
import { getSortedPostsData, getFeaturedPosts } from "../../lib/posts";
import Link from "next/link";
import Date from "../../components/utilities/date";
import PageLayout from "../../components/layout/content-layout";
import Circuit from "../../components/patterns/circuit";
import ArticleLink from "../../components/cards/article-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const blogHref = (slug) => `/blog/${slug}`;

const PostsPage = ({ allPosts, featuredPosts }) => {
  const featuredPost = featuredPosts[0];

  return (
    <>
      <Banner title={featuredPost.title} pattern={Circuit}>
        <p>{featuredPost.excerpt}</p>
        <a
          href={blogHref(featuredPost.slug)}
          className="hover:underline [&>svg]:hover:animate-bounceRight"
        >
          Read More
          <FontAwesomeIcon className="ml-2" icon={faArrowRightLong} />
        </a>
      </Banner>
      <PageLayout className="my-6 leading-6">
        <h2 className="text-font-color my-6 text-2xl leading-5">
          Recent Posts
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {allPosts.map(({ slug, date, title, excerpt }) => (
            <ArticleLink
              slug={slug}
              date={date}
              title={title}
              excerpt={excerpt}
            />
          ))}
        </div>
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
