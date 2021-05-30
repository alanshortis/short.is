import Link from 'next/link';

const PostNav = ({ nextPost, prevPost }) => (
  <nav>
    <ul>
      {prevPost && (
        <li>
          <p>&larr; Older</p>
          <Link href={prevPost.slug}>
            <a>{prevPost.title}</a>
          </Link>
        </li>
      )}
      {nextPost && (
        <li>
          <p>Newer &rarr;</p>
          <Link href={nextPost.slug}>
            <a>{nextPost.title}</a>
          </Link>
        </li>
      )}
    </ul>
  </nav>
);

export default PostNav;
