import React from 'react';
import PropTypes from 'prop-types';

const Contents = ({ sections }) => (
  <>
    <h2>Index</h2>
    <ol>
      {sections.map(section => (
        <li key={section.hash}>
          <a href={section.hash}>{section.title}</a>
        </li>
      ))}
    </ol>
  </>
);

Contents.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      hash: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Contents;
