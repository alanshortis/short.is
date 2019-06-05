import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Post from './Post';

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
        return <Post slug={slug} title={title} date={date} />;
      })
    }
  />
);

export default List;
