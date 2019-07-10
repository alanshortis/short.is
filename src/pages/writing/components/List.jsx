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
            category
            date(formatString: "DD MMMM YYYY")
          }
        }
      }
    }
  }
`;

const List = () => (
  <div>
    <StaticQuery
      query={postsQuery}
      render={({ allMdx }) =>
        allMdx.edges.map(({ node }) => {
          const { slug, title, category, date } = node.frontmatter;
          return <Post key={slug} slug={slug} title={title} category={category} date={date} />;
        })
      }
    />
  </div>
);

export default List;
