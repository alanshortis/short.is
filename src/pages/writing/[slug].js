import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import externalLinks from 'remark-external-links';
import { allPostFrontMatter, postContent } from '../../data/posts';
import { A, ExampleEmbed, Layout, PostDate, PostNav } from '../../components';
import { PostArticle, PostMeta, PostBody } from '../../components/PostLayout';

export function getStaticPaths() {
  const paths = allPostFrontMatter.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { content, frontMatter, nextPost, prevPost } = postContent(params.slug);
  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [externalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    },
  });

  return { props: { mdxContent, frontMatter, nextPost, prevPost } };
}

export const config = {
  unstable_runtimeJS: false,
};

// Add each component used in MDX files.
const components = { ExampleEmbed };

const Post = ({ mdxContent, frontMatter, meta, nextPost, prevPost }) => {
  const { date, title, intro } = frontMatter;

  return (
    <Layout meta={meta} title={title} hasFooter>
      <PostArticle>
        <PostMeta>
          <PostDate date={date} />
          <h1>{title}</h1>
        </PostMeta>
        <PostBody>
          <p className="intro">{intro}</p>
          <MDXRemote {...mdxContent} components={components} />
          <hr />
          <p>
            If you have found this article useful, please consider{' '}
            <A href="https://www.buymeacoffee.com/alanshortis">buying me a coffee</A>.
          </p>
        </PostBody>
      </PostArticle>
      <PostNav nextPost={nextPost} prevPost={prevPost} />
    </Layout>
  );
};

export default Post;
