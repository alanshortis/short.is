/* eslint-disable no-param-reassign */
import type { GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import codeExtra from 'remark-code-extra';
import externalLinks from 'remark-external-links';
import highlight from 'remark-highlight.js';
import { postContent } from './all-posts';

// Yuck. 'remark-code-extra' doesn't have types, so...
type RemarkNode = {
  data: {
    hName: string;
    hProperties: string[];
  };
};

export const postData: GetStaticProps = async ({ params }) => {
  const fileContent = postContent(params?.slug as string);
  const mdxContent = await serialize(fileContent.content, {
    mdxOptions: {
      remarkPlugins: [
        externalLinks,
        highlight,
        [
          codeExtra,
          {
            transform: {
              transform: (node: RemarkNode): void => {
                node.data.hName = 'code-block'; // Wrap each code block in this web component.
                node.data.hProperties = []; // Get rid of the 'classname' attr.
              },
            },
          },
        ],
      ],
    },
  });

  return {
    props: {
      ...fileContent,
      mdxContent,
    },
  };
};
