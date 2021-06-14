import { createGlobalStyle } from 'styled-components';

const SyntaxStyles = createGlobalStyle`
  :root {
    --comment: ${p => p.theme.syntax.comment};
    --line: ${p => p.theme.syntax.line};

    & body.dark {
      --comment: ${p => p.theme.syntax.commentDark};
      --line: ${p => p.theme.syntax.lineDark};
    }
  }

  pre[class^="language-"] {
    background-color: var(--secondary-background);
    border-radius: ${p => p.theme.radius};
    margin-bottom: var(--spacing);
    overflow-x: auto;
    padding: calc(var(--spacing) / 2);
    @media ${p => p.theme.media.smallMax} {
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

  .remark-highlight-code-line {
    display: block;
    background-color: var(--line);
    box-shadow: inset 11px 0 0 -7px var(--accent);
    transform: translateX(-1rem);
    padding: 0.25rem 1rem;
    width: calc(100% + 2rem);
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

export default SyntaxStyles;
