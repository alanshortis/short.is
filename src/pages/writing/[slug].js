import Link from 'next/link';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { allPostFrontMatter, postContent } from '../../data/posts';
import PostDate from '../../components/PostDate';
import ExampleEmbed from '../../components/ExampleEmbed';
import PostNav from '../../components/PostNav';

const components = { ExampleEmbed };

const Post = ({ content, frontMatter, nextPost, prevPost }) => {
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
      <PostNav nextPost={nextPost} prevPost={prevPost} />
    </>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export async function getStaticPaths() {
  const paths = allPostFrontMatter.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { content, frontMatter, nextPost, prevPost } = postContent(params.slug);
  const mdxContent = await renderToString(content, { components });

  return { props: { content: mdxContent, frontMatter, nextPost, prevPost } };
}

export default Post;
