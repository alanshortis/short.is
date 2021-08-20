import Link from 'next/link';
import { allPostFrontMatter } from '../../posts/posts';
import { Layout, PostDate } from '../../components';

export async function getStaticProps() {
  return {
    props: {
      posts: allPostFrontMatter,
    },
  };
}

const Writing = ({ posts }) => (
  <Layout title="Writing">
    <h1>Writing</h1>
    <ol>
      {posts.map(post => (
        <li key={post.slug}>
          <Link href={`writing/${post.slug}`}>
            <a>
              <PostDate date={post.date} updated={post.updated}>
                {post.date}
              </PostDate>
              <h2>{post.title}</h2>
              <p>{post.intro}</p>
            </a>
          </Link>
        </li>
      ))}
    </ol>
  </Layout>
);

export default Writing;
