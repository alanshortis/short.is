import dynamic from 'next/dynamic';
import { serialize } from 'next-mdx-remote/serialize';
import externalLinks from 'remark-external-links';
import highlight from 'remark-highlight.js';
import codeExtra from 'remark-code-extra';
import remarkSlug from 'remark-slug';
import { allPostFrontMatter, postContent } from '../../data/posts';
import { PostArticle, PostMeta, PostBody } from '../../components/PostLayout';
import SyntaxStyles from '../../styles/SyntaxStyles';
import { daysSince } from '../../helpers';
import { Disclaimer, ExampleEmbed, Layout, PostDate, PostNav, TableOfContents } from '../../components';

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
  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkSlug,
        externalLinks,
        { target: '_blank', rel: ['noopener', 'noreferrer'] },
        highlight,
        [
          codeExtra,
          {
            transform: {
              transform: node => {
                node.data.hName = 'code-block'; // Wrap code block in this web component
                node.data.hProperties = {
                  // Not all languages are supported so we can override
                  // what's shown by using meta (string that follows lang in markdown).
                  'data-lang': node.meta || node.lang,
                };
              },
            },
          },
        ],
      ],
    },
  });

  return { props: { mdxContent, frontMatter, nextPost, prevPost } };
}

export const config = {
  unstable_runtimeJS: false,
};

// Add each component used in MDX files.
const components = { ExampleEmbed, TableOfContents };

const Post = ({ mdxContent, frontMatter, meta, nextPost, prevPost }) => {
  const { date, title, intro, updated } = frontMatter;
  const isOld = daysSince(date) >= 365 * 2;

  return (
    <Layout meta={meta} title={title} intro={intro} hasFooter>
      <SyntaxStyles />
      <PostArticle>
        {isOld && <Disclaimer />}
        <PostMeta>
          <PostDate date={date} updated={updated} />
          <h1>{title}</h1>
        </PostMeta>
        <PostBody>
          <p className="intro">{intro}</p>
          <Mdx {...mdxContent} components={components} />
        </PostBody>
      </PostArticle>
      <PostNav nextPost={nextPost} prevPost={prevPost} />
    </Layout>
  );
};

export default Post;
