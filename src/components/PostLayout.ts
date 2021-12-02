import styled from 'styled-components';

export const PostArticle = styled.article`
  column-gap: calc(var(--spacing) * 2);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  @media ${p => p.theme.media.medium} {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
`;

export const PostMeta = styled.div`
  grid-column: 1 / 3;
  margin-bottom: var(--spacing);
  @media ${p => p.theme.media.medium} {
    grid-column: 1 / 13;
  }
`;

export const PostBody = styled.div`
  grid-column: 1 / 3;
  @media ${p => p.theme.media.medium} {
    grid-column: 6 / 13;
  }

  h2,
  h3 {
    padding-top: var(--spacing);
    margin-bottom: var(--spacing);
  }

  p,
  ul,
  ol,
  blockquote {
    line-height: 1.563;
    margin-bottom: var(--spacing);
    code {
      background-color: var(--secondaryBackground);
      border-radius: ${p => p.theme.radius};
      padding: calc(var(--spacing) / 8);
    }
    &.intro {
      font-size: 1.333rem;
    }
    p:only-child,
    p:last-of-type {
      margin-bottom: 0;
    }
  }

  a {
    text-decoration: underline;
  }

  ul,
  ol {
    padding-left: calc(var(--spacing) / 2);
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

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom: var(--spacing);
    max-width: 100%;
    text-align: center;
  }

  blockquote {
    display: inline-flex;
    margin: 0 calc(var(--spacing) / 2);
    margin-bottom: var(--spacing);
    &::before {
      content: '> ';
      margin-right: calc(var(--spacing) / 2);
    }
  }

  code {
    font-family: ${p => p.theme.font.familyMono};
    font-size: 0.8rem;
    line-height: 1.5;
    .hljs-comment {
      font-style: italic;
    }
  }

  .code-block {
    background-color: var(--secondaryBackground);
    border: 1px solid currentColor;
    margin-bottom: calc(var(--spacing) * 2);
    position: relative;
    width: calc(100% - var(--spacing) / 2);
    ::after {
      background-image: linear-gradient(
        -45deg,
        currentColor 5.56%,
        transparent 5.56%,
        transparent 50%,
        currentColor 50%,
        currentColor 55.56%,
        transparent 55.56%,
        transparent 100%
      );
      background-position: fixed;
      /* Yes, magic numbers. But decimals from em or rem make it look janky. */
      background-size: 10px 10px;
      content: '';
      height: 100%;
      left: calc(var(--spacing) / 2);
      position: absolute;
      top: calc(var(--spacing) / 2);
      width: 100%;
      z-index: -1;
    }
    pre {
      margin-bottom: calc(var(--spacing) / 2);
      overflow-x: scroll;
      padding: calc(var(--spacing) / 4);
    }
    div {
      border-top: 1px solid currentColor;
      display: flex;
      justify-content: flex-end;
      padding: calc(var(--spacing) / 4);
    }
    button {
      font-size: 0.8rem;
      text-transform: uppercase;
    }
  }
`;
