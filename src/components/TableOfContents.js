const TableOfContents = ({ sections }) => (
  <>
    <h2>Table of contents</h2>
    <nav>
      <ol>
        {sections.map(section => (
          <li key={section.id}>
            <a href={`#${section.id}`}>{section.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  </>
);

export default TableOfContents;
