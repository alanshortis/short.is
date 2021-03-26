import Link from 'next/link';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { allPostSlugs, postContent } from '../../data/posts';
import PostDate from '../../components/PostDate';
import ExampleEmbed from '../../components/ExampleEmbed';

const components = { ExampleEmbed };

const Post = ({ content, frontMatter }) => {
  const postContent = hydrate(content, { components });
  return (
    <>
      <Link href="/">
        <a>Back</a>
      </Link>
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
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { content, frontMatter } = postContent(params.slug);
  const mdxContent = await renderToString(content, { components });

  return { props: { content: mdxContent, frontMatter } };
}

export default Post;
