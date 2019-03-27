import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description }) => {
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
        { name: 'twitter:creator', content: siteMetadata.author },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: metaDescription },
      ]}
    />
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

SEO.defaultProps = {
  description: null,
};

export default SEO;
