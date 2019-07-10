import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import PostDate from '../../../components/PostDate';

const PostLink = styled(Link)`
  display: block;
  color: ${p => p.theme.color.typeLight};
  border: 7px solid ${p => p.theme.color.typeLight};
  padding: 1rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: ${p => p.theme.color.accent};
  }
  &:not(:last-of-type) {
    margin-bottom: 2rem;
  }
`;

const Post = ({ slug, title, category, date }) => (
  <PostLink key={slug} to={slug}>
    <h2>{title}</h2>
    <PostDate date={date} /> | {category}
  </PostLink>
);

Post.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Post;
