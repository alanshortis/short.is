import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import externalLinks from 'remark-external-links';
import { allPostFrontMatter, postContent } from '../../data/posts';
import { ExampleEmbed, Layout } from '../../components';

// Create pages for all posts.
export function getStaticPaths() {
  const paths = allPostFrontMatter.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

// Get content for this post.
export async function getStaticProps({ params }) {
  const { content, frontMatter, nextPost, prevPost } = postContent(params.slug);
  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    },
  });

  return { props: { mdxContent, frontMatter, nextPost, prevPost } };
}

// Add each component used in MDX files.
const components = { ExampleEmbed };

const Post = ({ mdxContent, frontMatter, meta }) => {
  const { date, title, intro } = frontMatter;

  return (
    <Layout meta={meta} title={title}>
      <article>
        <div>
          <date dateTime={date}>{date}</date>
          <h1>{title}</h1>
        </div>
        <div>
          <p>{intro}</p>
          <MDXRemote {...mdxContent} components={components} />
        </div>
      </article>
    </Layout>
  );
};

export default Post;
