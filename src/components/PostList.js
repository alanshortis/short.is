import Link from 'next/link';
import PostDate from './PostDate';

const PostList = ({ posts }) => (
  <ol>
    {posts.map(({ slug, date, title, intro }) => (
      <li key={slug}>
        <Link href={`/writing/${slug}`}>
          <a>
            <PostDate date={date} />
            <p>{title}</p>
            <p>{intro}</p>
          </a>
        </Link>
      </li>
    ))}
  </ol>
);

export default PostList;
