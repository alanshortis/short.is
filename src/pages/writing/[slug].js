// import ReactMarkdown from 'react-markdown';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { allPostSlugs, getPostContent } from '../../data/posts';
import PostDate from '../../components/PostDate';
import ExampleEmbed from '../../components/ExampleEmbed';

const components = { ExampleEmbed };

const Post = ({ content, frontMatter }) => {
  const postContent = hydrate(content, { components });
  return (
    <>
      <PostDate date={frontMatter.date} />
      <h1>{frontMatter.title}</h1>
      <p>{frontMatter.intro}</p>
      <div>{postContent}</div>
    </>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export async function getStaticPaths() {
  const paths = allPostSlugs.map(slug => ({
    params: { slug: slug.split('/').pop() }, // Slug without 'writing/'
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { content, data } = getPostContent(params.slug);
  const mdxContent = await renderToString(content, { components });

  return { props: { content: mdxContent, frontMatter: data } };
}

export default Post;
