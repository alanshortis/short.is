import dynamic from 'next/dynamic';
import { serialize } from 'next-mdx-remote/serialize';
import { allPostFrontMatter, postContent } from '../../data/posts';
import { Disclaimer, ExampleEmbed, Layout, PostDate, PostNav } from '../../components';
import { PostArticle, PostMeta, PostBody } from '../../components/PostLayout';
import SyntaxStyles from '../../styles/SyntaxStyles';
import mdxOptions from './mdxOptions';
import { daysSince } from '../../helpers';

// Dynamic import to prevent server render in dev
// because MDX code blocks are wrapped in a web component.
const Mdx = dynamic(() => import('next-mdx-remote').then(mod => mod.MDXRemote), {
  ssr: process.env.NODE_ENV === 'production',
});

export function getStaticPaths() {
  const paths = allPostFrontMatter.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { content, frontMatter, nextPost, prevPost } = postContent(params.slug);
  const mdxContent = await serialize(content, { mdxOptions });

  return { props: { mdxContent, frontMatter, nextPost, prevPost } };
}

export const config = {
  unstable_runtimeJS: false,
};

// Add each component used in MDX files.
const components = { ExampleEmbed };

const Post = ({ mdxContent, frontMatter, meta, nextPost, prevPost }) => {
  const { date, title, intro, updated } = frontMatter;
  const isOld = daysSince(date) >= 365 * 2;

  return (
    <Layout meta={meta} title={title} intro={intro} hasFooter>
      <SyntaxStyles />
      <PostArticle>
        <PostMeta>
          <PostDate date={date} updated={updated} />
          <h1>{title}</h1>
          {isOld && <Disclaimer />}
          <p className="intro">{intro}</p>
        </PostMeta>
        <PostBody>
          <Mdx {...mdxContent} components={components} />
        </PostBody>
      </PostArticle>
      <PostNav nextPost={nextPost} prevPost={prevPost} />
    </Layout>
  );
};

export default Post;
