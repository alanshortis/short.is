import type { FC } from 'react';
import type { GetStaticPaths, GetStaticProps } from 'next';
import type { Post } from '../../types/Posts';
import { allPostsFrontMatter, postContent } from '../../data/posts';
import { Layout, NextPrev } from '../../components';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPostsFrontMatter.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async context => {
  return {
    props: {
      ...postContent(context?.params?.slug as string),
    },
  };
};

type Props = Omit<Post, 'slug'>;

const WrtingPost: FC<Props> = ({ title, date, intro, nextPost, prevPost, updated, content }) => (
  <Layout title={title} intro={intro}>
    <h1>{title}</h1>
    <p>{intro}</p>
    <p>{date}</p>
    {updated && <p>{updated}</p>}
    <p>{content}</p>
    <NextPrev nextPost={nextPost} prevPost={prevPost} />
  </Layout>
);

export default WrtingPost;
