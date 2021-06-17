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

  pre {
    background-color: var(--secondary-background);
    border: 0.25rem solid var(--tertiary-background);
    border-radius: ${p => p.theme.radius} ${p => p.theme.radius} 0 0;
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

  .code-block-header {
    background-color: var(--tertiary-background);
    border-radius: 0 0 ${p => p.theme.radius} ${p => p.theme.radius};
    display: flex;
    justify-content: flex-end;
    margin-bottom: var(--spacing);
    padding: 0 calc(var(--spacing) / 2);
    dd, button {
      font-family: ${p => p.theme.font.familyMono};
      font-size: 0.833rem;
      letter-spacing: 2px;
      line-height: 2.1rem;
      text-transform: uppercase;
    }
    button {
      color: var(--accent);
      display: inline-flex;
      justify-content: center;
      width: 5.5rem;
    }
  }

  .hljs-comment {
    font-style: italic;
    color: var(--comment);
  }
`;

export default SyntaxStyles;
