import externalLinks from 'remark-external-links';
import highlight from 'remark-highlight.js';
import codeExtra from 'remark-code-extra';

const mdxOptions = {
  remarkPlugins: [
    externalLinks,
    { target: '_blank', rel: ['noopener', 'noreferrer'] },
    highlight,
    [
      codeExtra,
      {
        transform: {
          transform: node => {
            node.data.hName = 'code-block'; // Wrap code block in this web component
            node.data.hProperties = {
              'data-lang': node.lang,
            };
          },
        },
      },
    ],
  ],
};

export default mdxOptions;
