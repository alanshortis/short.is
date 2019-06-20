import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { CloudinaryContext } from 'cloudinary-react';
import Photo from './Photo';

const List = () => (
  <StaticQuery
    query={graphql`
      query PhotoListQuery {
        allPhotosJson {
          edges {
            node {
              id
              location
              camera
              film
              year
            }
          }
        }
      }
    `}
    render={data => (
      <CloudinaryContext cloudName={process.env.GATSBY_CLOUDINARY_NAME}>
        {data.allPhotosJson.edges.map(({ node }) => (
          <Photo key={node.id} photo={node} />
        ))}
      </CloudinaryContext>
    )}
  />
);

export default List;
