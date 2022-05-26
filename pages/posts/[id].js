import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import AuthorHeader from "../../components/author-header";
import PubInfo from "../../components/pub-info";

export default function Post({ postData }) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <AuthorHeader name={postData.author} avatar={postData.author} homepage={postData.homepage} />

      <article>
        <h1 className='text-4xl font-extrabold leading-10 tracking-tighter mt-4 mb-1'>{postData.title}</h1>
        <div className='text-gray-200 text-sm mb-4'>
          <PubInfo author={postData.author} date={postData.date} homepage={postData.homepage} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
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
