import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = ({ title, description, pathName, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            twitterUsername
            siteUrl
            ogImage
          }
        }
      }
    `
  );

  const { siteMetadata } = site;
  const pageTitle = title ? `${title} • ${siteMetadata.title}` : siteMetadata.title;
  const pageDescription = description || siteMetadata.description;
  const pageUrl = `${siteMetadata.siteUrl}${pathName || '/'}`;

  return (
    <Helmet htmlAttributes={{ lang: 'en-GB' }} title={pageTitle}>
      <meta name="description" content={pageDescription} />
      <meta name="image" content={siteMetadata.ogImage} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={siteMetadata.ogImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:creator" content={siteMetadata.twitterUsername} />
      {children}
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathName: PropTypes.string,
  children: PropTypes.node,
};

SEO.defaultProps = {
  title: '',
  description: '',
  pathName: '',
  children: null,
};

export default SEO;
