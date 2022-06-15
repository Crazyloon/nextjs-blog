import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import AuthorHeader from "../../components/utilities/author-header";
import PubInfo from "../../components/utilities/pub-info";

export default function Post({ postData }) {
  return (
    <>
      {/* styles required to target HTML converted from Markdown */}
      <style>
        {`article.list ul li {
          list-style-type: disc;
        }
        article.list ol li {
          list-style-type: number;
        }`}
      </style>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="max-w-xl flex flex-col m-auto">
        <AuthorHeader
          name={postData.author}
          avatar={postData.author}
          homepage={postData.homepage}
        />

        <article className="list">
          <h1 className="text-4xl font-extrabold leading-10 tracking-tighter mt-4 mb-1">
            {postData.title}
          </h1>
          <div className="text-gray-200 text-thin text-sm mb-4 flex">
            <PubInfo
              author={postData.author}
              date={postData.date}
              readTime={postData.readTime}
              homepage={postData.homepage}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </div>
    </>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
