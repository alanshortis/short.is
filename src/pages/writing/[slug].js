import Link from 'next/link';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import { allPostFrontMatter, postContent } from '../../data/posts';
import { ExampleEmbed, Layout, PostDate, PostNav } from '../../components';

const components = { ExampleEmbed };

const Post = ({ content, frontMatter, meta, nextPost, prevPost }) => {
  const postContent = hydrate(content, { components });
  const { date, title, intro } = frontMatter;

  return (
    <Layout meta={meta} title={title}>
      <Link href="/">
        <a>Back</a>
      </Link>
      <PostDate date={date} />
      <h1>{title}</h1>
      <p>{intro}</p>
      <div>{postContent}</div>
      <PostNav nextPost={nextPost} prevPost={prevPost} />
    </Layout>
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
