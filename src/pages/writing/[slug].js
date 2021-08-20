import dynamic from 'next/dynamic';
import { serialize } from 'next-mdx-remote/serialize';
import externalLinks from 'remark-external-links';
import highlight from 'remark-highlight.js';
import codeExtra from 'remark-code-extra';
import remarkSlug from 'remark-slug';
import GithubSlugger from 'github-slugger';
import { allPostFrontMatter, postContent } from '../../posts/posts';
import { daysSince } from '../../helpers';
import { ExampleEmbed, Layout, PostDate, PostNav, TableOfContents } from '../../components';

// Dynamic import to prevent server render in dev
// because MDX code blocks are wrapped in a web component.
const Mdx = dynamic(() => import('next-mdx-remote').then(mod => mod.MDXRemote), {
  ssr: process.env.NODE_ENV === 'production',
});

export function getStaticPaths() {
  const paths = allPostFrontMatter.map(post => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Get the content of the post.
  const { content, frontMatter, nextPost, prevPost } = postContent(params.slug);
  const mdxContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        remarkSlug,
        externalLinks,
        { target: '_blank', rel: ['noopener', 'noreferrer'] },
        highlight,
        [
          codeExtra,
          {
            transform: {
              transform: node => {
                node.data.hName = 'code-block'; // Wrap code block in this web component
              },
            },
          },
        ],
      ],
    },
  });

  // Create an array of all the h2 titles for a TOC.
  const slugger = new GithubSlugger();
  const headingsRegex = new RegExp(/^(## )(.*)\n/, 'gm'); // All h2 titles from markdown.
  const headings = [...content.matchAll(headingsRegex)];

  const toc = headings.map(heading => {
    const title = heading[2].trim();
    const id = slugger.slug(title);

    return {
      title,
      id,
    };
  });

  return { props: { mdxContent, frontMatter, nextPost, prevPost, toc } };
}

export const config = {
  unstable_runtimeJS: false,
};

// Add each component used in MDX files.
const components = { ExampleEmbed };

const Post = ({ mdxContent, frontMatter, nextPost, prevPost, toc }) => {
  const { date, title, intro, updated, hasToc } = frontMatter;
  const isOld = daysSince(date) >= 365 * 2;

  return (
    <Layout title={title} intro={intro}>
      <article>
        {isOld && <p>THIS IS OLD</p>}
        <div>
          <PostDate date={date} updated={updated} />
          <h1>{title}</h1>
        </div>
        <div>
          <p className="intro">{intro}</p>
          {hasToc && <TableOfContents sections={toc} />}
          <Mdx {...mdxContent} components={components} />
        </div>
      </article>
      <PostNav nextPost={nextPost} prevPost={prevPost} />
    </Layout>
  );
};

export default Post;
