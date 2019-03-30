import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const postsQuery = graphql`{
    allMdx(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: {regex: "/(posts)/.*\\.(md|mdx)$/"}}
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`;

const List = () => (
  <StaticQuery
    query={postsQuery}
    render={({ allMdx }) =>
      allMdx.edges.map(({ node }) => {
        const { slug, title, date } = node.frontmatter;
        return (
          <Link key={slug} to={slug}>
            <h2>{title}</h2>
            <p>{date}</p>
          </Link>
        );
      })
    }
  />
);

export default List;
