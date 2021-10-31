/* eslint-disable no-param-reassign */
import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import codeExtra from 'remark-code-extra';
import externalLinks from 'remark-external-links';
import highlight from 'remark-highlight.js';
import type { Post } from '../../types';
import { allPostsFrontMatter, postContent } from '../../data/posts';
import { Layout, NextPrev, PostDate } from '../../components';

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

type Props = Omit<Post, 'slug' | 'content'>;

const WrtingPost: FC<Props> = ({ title, date, intro, nextPost, prevPost, updated, mdxContent }) => (
  <Layout title={title} intro={intro}>
    <PostDate date={date} updated={updated} />
    <h1>{title}</h1>
    <p>{intro}</p>
    <MDXRemote {...mdxContent} />
    <NextPrev nextPost={nextPost} prevPost={prevPost} />
  </Layout>
);

export default WrtingPost;
