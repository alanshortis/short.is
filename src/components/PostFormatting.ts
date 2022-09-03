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
    &:only-child,
    &:last-child {
      margin-bottom: 0;
    }
  }

  .intro {
    font-size: 1.333rem;
    font-variation-settings: 'wght' ${p => p.theme.font.weight};
    letter-spacing: initial;
    padding-top: 0;
  }

  a {
    color: var(--accent);
    text-decoration: underline;
    white-space: nowrap;
    &[href^='http']:not([href*='short.is'])::after {
      content: '↗';
      display: inline-block;
      font-size: 0.8rem;
      margin-left: 0.25rem;
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
    padding-left: ${p => `calc(var(--spacing) - ${p.theme.borderSize})`};
  }

  li {
    list-style: decimal;
    margin-bottom: calc(var(--spacing) / 4);
    padding-left: calc(var(--spacing) / 4);
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

  abbr {
    border-bottom: 1px dashed currentColor;
    text-decoration: none;
  }

  ins {
    text-decoration: none;
  }

  del {
    opacity: 0.6;
    position: relative;
    text-decoration: none;
    &::before {
      border-bottom: ${p => p.theme.borderSize} solid currentColor;
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      width: 100%;
    }
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
    font-weight: ${p => p.theme.font.weightMono};
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

  strong {
    font-variation-settings: 'wght' ${p => p.theme.font.weightBold};
  }
`;

export const PostList = styled(PostFormatting)`
  &:not(:last-of-type) {
    padding-bottom: calc(var(--spacing) * 2);
  }
`;
