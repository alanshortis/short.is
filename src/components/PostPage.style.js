import styled, { createGlobalStyle } from 'styled-components';
import { transparentize } from 'polished';
import codeRegular from '../../node_modules/typeface-ibm-plex-mono/files/ibm-plex-mono-latin-400.woff2';
import codeItalic from '../../node_modules/typeface-ibm-plex-mono/files/ibm-plex-mono-latin-400italic.woff2';

export const CodeFont = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.faceCode};
    font-style: normal;
    font-weight: ${p => p.theme.font.weight};
    src: url(${codeRegular}) format('woff2');
  }

  @font-face {
    font-display: swap;
    font-family: ${p => p.theme.font.faceCode};
    font-style: italic;
    font-weight: ${p => p.theme.font.weight};
    src: url(${codeItalic}) format('woff2');
  }
`;

export const PostContainer = styled.article`
  margin: 0 auto;
  max-width: ${p => p.theme.container};
  padding: ${p => p.theme.contentMargin};
  width: 100%;
`;

export const PostIntro = styled.p`
  font-size: 1.2rem;
  padding-bottom: ${p => p.theme.contentMargin};
  margin-bottom: ${p => p.theme.contentMargin};
  border-bottom: ${p => p.theme.border} solid currentColor;
`;

export const PostTitle = styled.h1`
  font-size: 2.488rem;
`;

export const StyledPost = styled.div`
  code,
  pre {
    font-family: ${p => p.theme.font.familyCode};
  }

  p,
  ul,
  ol {
    margin-bottom: ${p => p.theme.contentMargin};
    code {
      background-color: ${p => p.theme.color.syntax.background};
      color: ${p => p.theme.color.accent};
      font-size: 0.833rem;
      padding: 0 calc(${p => p.theme.contentMargin} / 8);
    }
  }

  iframe {
    margin-bottom: ${p => p.theme.contentMargin};
  }

  h2,
  h3 {
    padding-top: ${p => p.theme.contentMargin};
  }

  h2 + h3 {
    padding-top: 0;
  }

  ul,
  ol {
    list-style: decimal;
    padding-left: ${p => p.theme.contentMargin};
  }

  ul {
    list-style: disc;
  }

  li {
    margin-bottom: calc(${p => p.theme.contentMargin} / 4);
  }

  a {
    border-bottom: calc(${p => p.theme.border} / 2) solid ${p => p.theme.color.accent};
    color: currentColor;
    text-decoration: none;
    text-decoration-color: ${p => p.theme.color.accent};
    transition: border-bottom-width ${p => p.theme.transitionSpeed} ${p => p.theme.transitionTiming};
    @supports (text-decoration-thickness: 3px) {
      border-bottom: 0;
      text-decoration: underline;
      text-decoration-color: ${p => p.theme.color.accent};
      text-decoration-skip-ink: none;
      text-decoration-thickness: calc(${p => p.theme.border} / 2);
    }
    &.anchor {
      border: 0;
      display: block;
      position: relative;
      top: calc((${p => p.theme.headerHeight} + ${p => p.theme.contentMargin}) * -0.5);
    }
  }

  blockquote {
    border: 1px solid currentColor;
    border-left-width: ${p => p.theme.border};
    margin: ${p => p.theme.contentMargin};
    padding: ${p => p.theme.contentMargin};

    p:last-of-type {
      margin-bottom: 0;
    }
  }

  .gatsby-highlight-code-line {
    background-color: ${p => p.theme.color.syntax.backgroundHighlight};
    display: block;
    left: calc((${p => p.theme.contentMargin} / 2) * -1);
    padding: 0 calc(${p => p.theme.contentMargin} / 2);
    position: relative;
    width: calc(100% + ${p => p.theme.contentMargin});
  }

  .gatsby-highlight {
    background-color: ${p => p.theme.color.syntax.background};
    color: ${p => p.theme.color.syntax.text};
    font-size: 0.833rem;
    left: 0;
    margin-bottom: ${p => p.theme.contentMargin};
    margin-left: 0;
    margin-right: 0;
    overflow-x: auto;
    padding: calc(${p => p.theme.contentMargin} / 2);
    right: 0;
    width: auto;

    &::-webkit-scrollbar {
      height: ${p => p.theme.border};
    }
    &::-webkit-scrollbar-track {
      background: ${p => p.theme.color.scrollTrack};
    }
    &::-webkit-scrollbar-thumb {
      background: ${p => p.theme.color.scrollBar};
    }
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .namespace {
    color: ${p => transparentize(0.5, p.theme.color.type)};
  }

  .token.comment {
    font-style: italic;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: ${p => p.theme.color.syntax.property};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: ${p => p.theme.color.syntax.selector};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css.token.string,
  .style.token.string {
    color: ${p => p.theme.color.syntax.operator};
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: ${p => p.theme.color.syntax.keyword};
  }

  .token.function,
  .token.class-name {
    color: ${p => p.theme.color.syntax.function};
  }

  .token.regex,
  .token.important,
  .token.variable {
    color: ${p => p.theme.color.syntax.regex};
  }

  .token.italic {
    font-style: italic;
  }
`;
