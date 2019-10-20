import styled from 'styled-components';

const StyledPost = styled.div`
  p,
  ul,
  ol {
    margin-bottom: ${p => p.theme.contentMargin};
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
    margin: 0 ${p => p.theme.contentMargin};
    padding-left: ${p => p.theme.contentMargin};
    border-left: ${p => p.theme.border} solid currentColor;
  }

  .gatsby-highlight-code-line {
    display: block;
  }

  .gatsby-highlight {
    background-color: ${p => p.theme.color.codeBackground};
    border-radius: ${p => p.theme.border};
    margin-bottom: ${p => p.theme.contentMargin};
    overflow-x: auto;
    padding: calc(${p => p.theme.contentMargin} / 2);
  }
`;

export default StyledPost;
