import { useStaticQuery, graphql } from 'gatsby';

const postQuery = () =>
  useStaticQuery(
    graphql`
      {
        allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                slug
                title
                date
                intro
              }
            }
          }
        }
      }
    `
  );

export default postQuery;
