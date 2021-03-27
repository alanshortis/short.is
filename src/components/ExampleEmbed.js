import PropTypes from 'prop-types';

const ExampleEmbed = ({ title, url }) => (
  <div>
    <iframe
      title={title}
      src={url}
      frameBorder="no"
      allowFullScreen={false}
      loading="lazy"
    ></iframe>
    <a href={url} target="_blank">
      <span>{title}</span>
      <span>{url}</span>
    </a>
  </div>
);

ExampleEmbed.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ExampleEmbed;
