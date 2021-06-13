import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import externalLinks from 'remark-external-links';
import { allPostFrontMatter, postContent } from '../../data/posts';
import { Disclaimer, ExampleEmbed, Layout, PostDate, PostNav } from '../../components';
import { PostArticle, PostMeta, PostBody } from '../../components/PostLayout';
import daysSince from '../../helpers/daysSince';

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
  const { date, title, intro, updated } = frontMatter;
  const isOld = daysSince(date) >= 365 * 2;

  return (
    <Layout meta={meta} title={title} intro={intro} hasFooter>
      <PostArticle>
        <PostMeta>
          <PostDate date={date} updated={updated} />
          <h1>{title}</h1>
          {isOld && <Disclaimer />}
          <p className="intro">{intro}</p>
        </PostMeta>
        <PostBody>
          <MDXRemote {...mdxContent} components={components} />
        </PostBody>
      </PostArticle>
      <PostNav nextPost={nextPost} prevPost={prevPost} />
    </Layout>
  );
};

export default Post;
