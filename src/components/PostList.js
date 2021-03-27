import Link from 'next/link';
import PropTypes from 'prop-types';
import PostDate from './PostDate';

const PostList = ({ posts }) => (
  <ul>
    {posts.map(({ slug, date, title, intro }) => (
      <li key={slug}>
        <Link href={`/writing/${slug}`}>
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

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      intro: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
      nextPostSlug: PropTypes.string,
      prevPostSlug: PropTypes.string,
    })
  ).isRequired,
};

export default PostList;
