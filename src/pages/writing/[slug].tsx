import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import highlight from 'remark-highlight.js';
import type { Post } from '../../types';
import { allPostsFrontMatter, postContent } from '../../data/all-posts';
import { Aside, Full, Grid, PageBody, Sticker } from '../../components/Grid';
import { Coffee, ExampleEmbed, Layout, NextPrev, PostFormatting, PostDate } from '../../components';

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

const WrtingPost: FC<PostProps> = ({ title, date, intro, nextPost, prevPost, mdxContent, year }) => (
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
            <PostDate date={date} hasYear />
          </Sticker>
        </Aside>
        <PageBody as={PostFormatting}>
          <p className="intro" dangerouslySetInnerHTML={{ __html: intro }} />
          <MDXRemote {...mdxContent} components={{ ExampleEmbed }} />
          <Coffee />
        </PageBody>
        <NextPrev nextPost={nextPost} prevPost={prevPost} />
      </Grid>
    </Layout>
  </>
);

export default WrtingPost;
