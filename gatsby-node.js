const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise(resolve => {
    graphql(`
      {
        allMdx(sort: { order: ASC, fields: frontmatter___date }) {
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
          component: path.resolve('./src/components/PostPage.js'),
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
};
