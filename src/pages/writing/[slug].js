// import ReactMarkdown from 'react-markdown';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { allPostSlugs, getPostContent } from '../../data/posts';
import PostDate from '../../components/PostDate';
import ExampleEmbed from '../../components/ExampleEmbed';

const components = { ExampleEmbed };

const Post = ({ content, data }) => {
  const postContent = hydrate(content, { components });
  return (
    <>
      <PostDate date={data.date} />
      <h1>{data.title}</h1>
      <p>{data.intro}</p>
      <div>{postContent}</div>
    </>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export async function getStaticPaths() {
  const paths = allPostSlugs().map(slug => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { content, data } = getPostContent(params.slug);
  const mdxContent = await renderToString(content, { components });

  return { props: { content: mdxContent, data } };
}

export default Post;
