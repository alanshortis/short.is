const path = require('path');

function pageCreator(graphql, actions, postFolder) {
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
          component: path.resolve('./src/components/PostTemplate.js'),
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
  await pageCreator(graphql, actions, 'writing');
  await pageCreator(graphql, actions, 'daily');
};
