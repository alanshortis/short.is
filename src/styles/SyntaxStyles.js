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

  .hljs-comment {
    font-style: italic;
    color: var(--comment);
  }
`;

export default SyntaxStyles;
