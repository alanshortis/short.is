import { allPostSlugs, getPostContent } from '../../data/posts';
import PostDate from '../../components/PostDate';

const Post = ({ content, data }) => (
  <>
    <PostDate date={data.date} />
    <h1>{data.title}</h1>
    <p>{data.intro}</p>
    {content}
  </>
);

export const config = {
  unstable_runtimeJS: false,
};

export async function getStaticPaths() {
  const paths = allPostSlugs().map(slug => ({
    params: { slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { content, data } = getPostContent(params.slug);

  return { props: { content, data } };
}

export default Post;
