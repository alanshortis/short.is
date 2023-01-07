import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { MDXRemote } from 'next-mdx-remote';
import type { Post } from '../../types';
import { allWritingFrontMatter, writingContent } from '../../data/writing';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { Layout, NextPrev, PostFormatting, PostDate } from '../../components';
import { Concerns, ExampleEmbed } from '../../components/writing';

const ClickTimer = dynamic(() => import('../../components/writing/ClickTimer'), {
  ssr: process.env.NODE_ENV === 'production',
});

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allWritingFrontMatter.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const fileContent = await writingContent(params?.slug as string);

  return {
    props: {
      ...fileContent,
    },
  };
};

export const config = {
  unstable_runtimeJS: false,
};

type PostProps = Omit<Post, 'slug' | 'content'>;

const WrtingPost: FC<PostProps> = ({ title, date, intro, nextPost, prevPost, mdxContent }) => (
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
          <p className="intro" dangerouslySetInnerHTML={{ __html: intro }} />
          <MDXRemote {...mdxContent} components={{ Concerns, ExampleEmbed, ClickTimer }} />
        </PageBody>
        <NextPrev nextPost={nextPost} prevPost={prevPost} />
      </Grid>
    </Layout>
  </>
);

export default WrtingPost;
