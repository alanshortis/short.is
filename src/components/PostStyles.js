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
    &[href^='http']:not([href*='short.is'])::after {
      content: '↗';
      font-family: ${p => p.theme.font.familyMono};
      font-size: 0.833rem;
      margin-left: 0.25em;
      position: relative;
      left: -2px;
    }
  }

  p,
  ul,
  ol,
  blockquote {
    margin-bottom: var(--spacing);
    code {
      background-color: var(--secondary-background);
      border-radius: ${p => p.theme.radius};
      line-height: 1em;
      padding: calc(var(--spacing) / 8);
    }
    &.intro {
      font-size: 1.2rem;
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

  blockquote {
    border-left: 0.25rem solid var(--secondary-background);
    padding: calc(var(--spacing) / 2);
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
`;

export default PostStyles;
