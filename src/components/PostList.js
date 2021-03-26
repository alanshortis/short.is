import Link from 'next/link';
import PostDate from './PostDate';

const PostList = ({ posts }) => (
  <ul>
    {posts.map(({ slug, date, title, intro }) => (
      <li key={slug}>
        <Link href={`writing/${slug}`}>
          <a>
            <PostDate date={date} />
            <h2>{title}</h2>
            <p>{intro}</p>
          </a>
        </Link>
      </li>
    ))}
  </ul>
);

export default PostList;
