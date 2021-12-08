import styled from 'styled-components';
import { shadowBox } from './ShadowBox';

export const PostFormatting = styled.div`
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
    white-space: nowrap;
    &[href^='http']:not([href*='short.is'])::after {
      content: '↗';
      display: inline-block;
      font-family: ${p => p.theme.font.familyMono};
      font-size: 0.833rem;
      margin-left: 0.25em;
      position: relative;
      left: -2px;
      speak: never;
      text-decoration: none;
    }
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

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
    opacity: 0.5;
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
    ${shadowBox};
    pre {
      margin-bottom: calc(var(--spacing) / 2);
      overflow-x: scroll;
      padding: calc(var(--spacing) / 4);
    }
    div {
      display: flex;
      justify-content: flex-end;
      padding: calc(var(--spacing) / 4) 0;
      padding-bottom: 0;
    }
    button {
      font-size: 0.8rem;
      text-transform: uppercase;
    }
  }
`;
