import styled from 'styled-components';
import { transparentize } from 'polished';

const StyledPost = styled.div`
  p,
  ul,
  ol {
    margin-bottom: ${p => p.theme.contentMargin};
    code {
      background-color: ${p => p.theme.color.syntax.background};
      color: ${p => p.theme.color.accent};
      font-size: 0.833rem;
      line-height: 1em;
      padding: calc(${p => p.theme.contentMargin} / 8) calc(${p => p.theme.contentMargin} / 4);
    }
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
    transition: border-bottom-width ${p => p.theme.transitionSpeed} ${p => p.theme.transitionTiming};
    &.anchor {
      border: 0;
      display: block;
      position: relative;
      top: calc((${p => p.theme.headerHeight} + ${p => p.theme.contentMargin}) * -1);
    }
  }

  blockquote {
    border-left: ${p => p.theme.border} solid currentColor;
    margin: 0 ${p => p.theme.contentMargin};
    padding-left: ${p => p.theme.contentMargin};
  }

  .gatsby-highlight-code-line {
    display: block;
    background-color: ${p => p.theme.color.syntax.backgroundHighlight};
    position: relative;
    left: calc((${p => p.theme.contentMargin} / 2) * -1);
    width: calc(100% + ${p => p.theme.contentMargin});
    padding: 0 calc(${p => p.theme.contentMargin} / 2);
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
  .language-css .token.string,
  .style .token.string {
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

export default StyledPost;
