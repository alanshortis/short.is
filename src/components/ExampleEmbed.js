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

export default ExampleEmbed;
