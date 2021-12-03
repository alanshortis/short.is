import type { FC, ReactNode } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import type { Post } from '../../types';
import { allPostsFrontMatter } from '../../data/all-posts';
import { postData } from '../../data/post';
import { ExampleEmbed, Layout, NextPrev, PostDate, ShadowBox } from '../../components';
import { PostArticle, PostBody, PostMeta, PostTitle } from '../../components/PostLayout';
import { daysSince } from '../../helpers';

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

export const getStaticProps: GetStaticProps = ctx => postData(ctx);

export const config = {
  unstable_runtimeJS: false,
};

const components = { ExampleEmbed };

type Props = Omit<Post, 'slug' | 'content'>;

const WrtingPost: FC<Props> = ({ title, date, intro, nextPost, prevPost, updated, mdxContent }) => {
  const isOld = daysSince(date) > 729;
  return (
    <>
      <Head>
        {nextPost && <link rel="prefetch" href={`/writing/${nextPost.slug}`} />}
        {prevPost && <link rel="prefetch" href={`/writing/${prevPost.slug}`} />}
        <script src="/js/code-block.js" async />
      </Head>
      <Layout title={title} intro={intro}>
        <PostArticle>
          <PostMeta>
            {isOld && (
              <ShadowBox isNegative>
                <p>
                  This post is more than two years old. Some approaches, dependencies, and best practices may
                  no longer be recommended.
                </p>
              </ShadowBox>
            )}
            <PostTitle>{title}</PostTitle>
            <PostDate date={date} updated={updated} />
          </PostMeta>
          <PostBody>
            <p className="intro">{intro}</p>
            {/* It's upset about the components prop and I don't have the energy right now. */}
            {/* @ts-ignore */}
            <Mdx {...mdxContent} components={components as ReactNode} />
          </PostBody>
          <NextPrev nextPost={nextPost} prevPost={prevPost} />
        </PostArticle>
      </Layout>
    </>
  );
};

export default WrtingPost;
