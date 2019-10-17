import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Meta = ({ title, description }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const { siteMetadata } = site;
  const { author } = siteMetadata;
  const metaDescription = description || siteMetadata.description;
  const titleTemplate = title === 'Home' ? siteMetadata.title : `%s • ${siteMetadata.title}`;

  return (
    <Helmet
      htmlAttributes={{ lang: 'en-GB' }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        { name: 'description', content: metaDescription },
        { property: 'og:title', content: title },
        { property: 'og:description', content: metaDescription },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:creator', content: author },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: metaDescription },
      ]}
    />
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Meta.defaultProps = {
  description: '',
};

export default Meta;
