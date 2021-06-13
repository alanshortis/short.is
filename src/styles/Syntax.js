import { createGlobalStyle } from 'styled-components';

const Syntax = createGlobalStyle`
  :root {
    --comment: ${p => p.theme.syntax.comment};
    --line: ${p => p.theme.syntax.line};

    & body.dark {
      --comment: ${p => p.theme.syntax.commentDark};
      --line: ${p => p.theme.syntax.lineDark};
    }
  }

  .remark-highlight-code-line {
    display: block;
    background-color: var(--line);
    box-shadow: inset 11px 0 0 -7px var(--accent);
    transform: translateX(-1rem);
    padding: 0.25rem 1rem;
    width: calc(100% + 2rem);
    ${
      '' /* @media ${p => p.theme.media.mediumMax} {
      padding: 0.25rem 2rem;
      transform: translateX(-2rem);
      width: calc(100% + 4rem);
    } */
    }
    @media ${p => p.theme.media.smallMax} {
      padding: 0.25rem 1rem;
      transform: translateX(-1rem);
      width: calc(100% + 2rem);
    }
  }

  .comment {
    font-style: italic;
    color: var(--comment);
  }
`;

export default Syntax;
