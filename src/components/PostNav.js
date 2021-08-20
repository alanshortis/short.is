import Link from 'next/link';

const PostNav = ({ nextPost, prevPost }) => (
  <nav>
    {prevPost ? (
      <Link href={`/writing/${prevPost.slug}`} passHref>
        <a>
          <p>
            <p>&larr; Older</p>
          </p>
          <p>{prevPost.title}</p>
        </a>
      </Link>
    ) : (
      <div></div>
    )}
    {nextPost && (
      <Link href={`/writing/${nextPost.slug}`} passHref>
        <a>
          <p>
            <p>Newer &rarr;</p>
          </p>
          <p>{nextPost.title}</p>
        </a>
      </Link>
    )}
  </nav>
);

export default PostNav;
