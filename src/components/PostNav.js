const PostNav = ({ nextPost, prevPost }) => (
  <nav>
    {prevPost && (
      <a href={`/writing/${prevPost.slug}`}>
        <p>Older</p>
        <p>{prevPost.title}</p>
      </a>
    )}
    {nextPost && (
      <a href={`/writing/${nextPost.slug}`}>
        <p>Newer</p>
        <p>{nextPost.title}</p>
      </a>
    )}
  </nav>
);

export default PostNav;
