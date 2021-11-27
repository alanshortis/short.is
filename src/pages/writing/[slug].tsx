/* eslint-disable no-param-reassign */
import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import { serialize } from 'next-mdx-remote/serialize';
import codeExtra from 'remark-code-extra';
import externalLinks from 'remark-external-links';
import highlight from 'remark-highlight.js';
import type { Post } from '../../types';
import { allPostsFrontMatter, postContent } from '../../data/posts';
import { Layout, NextPrev, PostDate } from '../../components';

/** Prevent `Expected server HTML to contain a matching <pre> in <code-block>` error.
 *  MDX code blocks are wrapped in a web component, which doesn't exist in node so we
 *  need to ensure we only attempt to render on the client in dev. Server rendering
 *  is fine and required in production as we're generating a totally static site.
 */
const Mdx = dynamic<MDXRemoteSerializeResult>(() => import('next-mdx-remote').then(mod => mod.MDXRemote), {
  ssr: process.env.NODE_ENV === 'production',
});

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPostsFrontMatter.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

// Yuck. 'remark-code-extra' doesn't have types, so...
type RemarkNode = {
  data: {
    hName: string;
    hProperties: string[];
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileContent = postContent(params?.slug as string);
  const mdxContent = await serialize(fileContent.content, {
    mdxOptions: {
      remarkPlugins: [
        externalLinks,
        highlight,
        [
          codeExtra,
          {
            transform: {
              transform: (node: RemarkNode): void => {
                node.data.hName = 'code-block'; // Wrap each code block in this web component.
                node.data.hProperties = []; // Get rid of the 'classname' attr.
              },
            },
          },
        ],
      ],
    },
  });

  return {
    props: {
      ...fileContent,
      mdxContent,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

type Props = Omit<Post, 'slug' | 'content'>;

const WrtingPost: FC<Props> = ({ title, date, intro, nextPost, prevPost, updated, mdxContent }) => (
  <>
    <Head>
      {nextPost && <link rel="prefetch" href={`writing/${nextPost.slug}`} />}
      {prevPost && <link rel="prefetch" href={`writing/${prevPost.slug}`} />}
    </Head>
    <Layout title={title} intro={intro}>
      <Head>
        <script src="/js/code-block.js" async />
      </Head>
      <PostDate date={date} updated={updated} />
      <h1>{title}</h1>
      <p>{intro}</p>
      <Mdx {...mdxContent} />
      <NextPrev nextPost={nextPost} prevPost={prevPost} />
    </Layout>
  </>
);

export default WrtingPost;
