import externalLinks from 'remark-external-links';
import highlight from 'remark-highlight.js';
import codeExtra from 'remark-code-extra';
// import { uniqueId } from '../../helpers';

const mdxOptions = {
  remarkPlugins: [
    externalLinks,
    { target: '_blank', rel: ['noopener', 'noreferrer'] },
    highlight,
    [
      codeExtra,
      {
        transform: node => {
          // const codeBlockId = uniqueId();
          return {
            // before: [
            //   {
            //     type: 'element',
            //     tagName: 'button',
            //     properties: {
            //       type: 'button',
            //       class: 'js-copy-code',
            //       'data-id': codeBlockId,
            //     },
            //     children: [
            //       {
            //         type: 'text',
            //         value: 'Copy',
            //       },
            //     ],
            //   },
            //   {
            //     type: 'text',
            //     value: node.lang,
            //   },
            // ],
            transform: node => {
              console.log(node);
              node.data.hName = 'code-copy';
              node.data.hProperties = {
                'data-lang': node.lang,
              };
            },
          };
        },
      },
    ],
  ],
};

export default mdxOptions;
