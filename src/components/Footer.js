const Footer = ({ meta }) => (
  <footer>
    <div>
      <p>
        &copy; {meta.year} Alan Shortis
        <a href="/writing/feed.xml">RSS</a>
        <a href="#top">Back to top</a>
      </p>
    </div>
  </footer>
);

export default Footer;
