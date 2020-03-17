const path = require('path');

function pageCreator(graphql, actions, postFolder, templatePath) {
  const { createPage } = actions;
  return new Promise(resolve => {
    graphql(`
      {
        allMdx(
          sort: { order: ASC, fields: frontmatter___date }
          filter: { fileAbsolutePath: { regex: "/${postFolder}/" } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `).then(results => {
      const { edges: pages } = results.data.allMdx;
      pages.forEach(({ node }, i) => {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve(templatePath),
          context: {
            slug: node.frontmatter.slug,
            newer: i === pages.length - 1 ? null : pages[i + 1].node,
            older: i === 0 ? null : pages[i - 1].node,
          },
        });
      });
      resolve();
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await pageCreator(graphql, actions, 'writing', './src/components/WritingTemplate.js');
  await pageCreator(graphql, actions, 'daily', './src/components/DailyTemplate.js');
};
