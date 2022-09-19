import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import highlight from 'remark-highlight.js';
import { daysSince } from '../../helpers';
import type { Post } from '../../types';
import { allPostsFrontMatter, postContent } from '../../data/all-posts';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { Coffee, Layout, NextPrev, PostFormatting, PostDate, Warning } from '../../components';
import { Concerns, ExampleEmbed } from '../../components/writing';

const ClickTimer = dynamic(() => import('../../components/writing/ClickTimer'), {
  ssr: process.env.NODE_ENV === 'production',
});

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPostsFrontMatter.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileContent = postContent(params?.slug as string);
  const mdxContent = await serialize(fileContent.content, {
    mdxOptions: {
      // I don't know why it's upset about the remark plugins, and I don't care at this point.
      // @ts-ignore
      remarkPlugins: [highlight],
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

type PostProps = Omit<Post, 'slug' | 'content'>;

const WrtingPost: FC<PostProps> = ({ title, date, intro, nextPost, prevPost, mdxContent }) => {
  const isOld = daysSince(date) > 730;

  let components = {
    Concerns,
    ExampleEmbed,
  };

  // TODO: Add a field in front matter to determine required web components
  if (date === '2022-09-19') {
    components = {
      ...components,
      ClickTimer,
    };
  }

  return (
    <>
      <Head>
        {nextPost && <link rel="prefetch" href={`/writing/${nextPost.slug}`} />}
        {prevPost && <link rel="prefetch" href={`/writing/${prevPost.slug}`} />}
      </Head>
      <Layout title={title} intro={intro}>
        <Grid>
          <Full>
            <h1>{title}</h1>
          </Full>
          <Aside>
            <Sticker>
              <PostDate date={date} hasYear hasShare />
            </Sticker>
          </Aside>
          <PageBody as={PostFormatting}>
            {isOld && <Warning>This post is more than 2 years old</Warning>}
            <p className="intro" dangerouslySetInnerHTML={{ __html: intro }} />
            <MDXRemote {...mdxContent} components={components} />
            <Coffee />
          </PageBody>
          <NextPrev nextPost={nextPost} prevPost={prevPost} />
        </Grid>
      </Layout>
    </>
  );
};

export default WrtingPost;
