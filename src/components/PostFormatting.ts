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
      padding: calc(var(--spacing) / 8);
    }
    &.intro {
      font-size: 1.333rem;
    }
    &:only-child,
    &:last-child {
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
      text-decoration: none;
      @supports (content: 'x' / 'y') {
        content: '↗' / 'Link opens in a new tab';
      }
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

  img {
    display: flex;
    margin: 0 auto;
    margin: calc(var(--spacing) * 2) auto;
    max-width: 100%;
  }

  ins {
    text-decoration: none;
  }

  del {
    text-decoration: line-through;
    opacity: 0.5;
  }

  blockquote {
    border-left: ${p => p.theme.borderSize} solid currentColor;
    display: inline-flex;
    margin: 0 calc(var(--spacing) / 2);
    margin-bottom: var(--spacing);
    padding-left: calc(var(--spacing) / 2);
  }

  code {
    font-family: ${p => p.theme.font.familyMono};
    font-size: 0.8rem;
    line-height: 1.5;
    .hljs-comment {
      font-style: italic;
      opacity: 0.5;
    }
  }

  pre {
    ${shadowBox};
    code {
      display: block;
      overflow-x: scroll;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;
