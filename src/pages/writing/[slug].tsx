import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import dynamic from 'next/dynamic';
import type { Post } from '../../types';
import { allPostsFrontMatter } from '../../data/all-posts';
import { postData } from '../../data/post';
import { Coffee, Layout, NextPrev, OldPost, PostDate } from '../../components';
import { PostArticle, PostBody, PostMeta } from '../../components/PostLayout';
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
          {isOld && <OldPost />}
          <PostMeta>
            <PostDate date={date} updated={updated} />
            <h1>{title}</h1>
          </PostMeta>
          <PostBody>
            <p className="intro">{intro}</p>
            <Mdx {...mdxContent} />
            <Coffee />
          </PostBody>
          <NextPrev nextPost={nextPost} prevPost={prevPost} />
        </PostArticle>
      </Layout>
    </>
  );
};

export default WrtingPost;
