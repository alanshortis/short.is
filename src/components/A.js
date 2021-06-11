const A = ({ children, href, rel }) => (
  <a href={href} target="_blank" rel={`noopener noreferrer ${rel}`}>
    {children}
  </a>
);

export default A;
