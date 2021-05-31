import styled from 'styled-components';

const PostStyles = styled.div`
  h2,
  h3 {
    padding-top: var(--spacing);
    margin-bottom: var(--spacing);
  }

  h2 + h3 {
    padding-top: 0;
  }

  a {
    color: var(--accent);
    text-decoration: none;
    &[href^='http']::after {
      content: '↗';
      font-family: ${p => p.theme.font.familyMono};
      font-size: 0.833rem;
      margin-left: 0.25em;
    }
  }

  p,
  ul,
  ol,
  pre {
    margin-bottom: var(--spacing);
    code {
      background-color: var(--secondary-background);
      border-radius: ${p => p.theme.radius};
      line-height: 1em;
      padding: calc(var(--spacing) / 8);
    }
  }

  ul,
  ol {
    padding-left: var(--spacing);
  }

  li {
    list-style: decimal;
    margin-bottom: calc(var(--spacing) / 4);
  }

  ul {
    li {
      list-style: disc;
    }
  }

  pre {
    background-color: var(--secondary-background);
    border-radius: ${p => p.theme.radius};
    overflow-x: auto;
    padding: calc(var(--spacing) / 2);
    @media ${p => p.theme.media.mediumMax} {
      left: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      padding: var(--spacing);
      position: relative;
      right: 50%;
      width: 100vw;
    }
    code {
      padding: 0;
    }
  }

  hr {
    border-top: 1px solid currentColor;
    margin-bottom: var(--spacing);
  }

  blockquote {
    border: 2px solid var(--secondary-bg);
    border-bottom-width: 4px;
    border-right-width: 4px;
    border-radius: ${p => p.theme.radius};
    font-size: 1.2rem;
    padding: calc(var(--spacing) / 2);
    margin-bottom: var(--spacing);
    @media ${p => p.theme.media.small} {
      margin: var(--spacing);
      margin-top: 0;
    }
    p:only-child,
    p:last-of-type {
      margin-bottom: 0;
    }
  }

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom: var(--spacing);
    max-width: 100%;
    text-align: center;
  }

  .intro {
    font-size: 1.2rem;
  }
`;

export default PostStyles;
