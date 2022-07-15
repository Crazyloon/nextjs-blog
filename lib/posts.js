import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import readingTime from "remark-reading-time";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

/*private*/ function getAllPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the slug
    return {
      slug,
      ...matterResult.data,
    };
  });

  return allPostsData;
}

export function getFeaturedPosts() {
  const featurePosts = getSortedPostsData();

  return featurePosts.filter((post) => post.featured);
}

export function getSortedPostsData() {
  const allPostsData = getAllPostsData();

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       slug: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       slug: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.mdx$/, ""),
      },
    };
  });
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const file = await remark()
    .use(readingTime)
    .use(html, { sanitize: false })
    .process(matterResult.content);

  matterResult.data.readTime = file.data.readingTime.minutes;

  const contentHtml = file.toString();

  // Combine the data with the slug and contentHtml
  return {
    slug,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  // Use remark to estimate the reading time
  const file = await remark().use(readingTime).process(matterResult.content);

  matterResult.data.readTime = file.data.readingTime.minutes;

  return {
    slug,
    post: fileContents,
    meta: { ...matterResult.data },
  };
}

export async function getMetaData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to estimate the reading time
  const file = await remark().use(readingTime).process(matterResult.content);

  matterResult.data.readTime = file.data.readingTime.minutes;

  return {
    ...matterResult.data,
  };
}
