const PostNav = ({ nextPost, prevPost }) => (
  <>
    {prevPost && (
      <p>
        PREV: <a href={`/writing/${prevPost.slug}`}>{prevPost.title}</a>
      </p>
    )}
    {nextPost && (
      <p>
        NEXT:<a href={`/writing/${nextPost.slug}`}>{nextPost.title}</a>
      </p>
    )}
  </>
);

export default PostNav;
