import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const postsQuery = graphql`
  query Posts {
    allPosts(sort: { order: DESC, fields: [frontmatter___date] }) {
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

const PostList = () => (
  <StaticQuery
    query={postsQuery}
    render={({ allPosts }) =>
      allPosts.edges.map(({ node }) => {
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

export default PostList;
