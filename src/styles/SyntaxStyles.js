import { createGlobalStyle } from 'styled-components';

const SyntaxStyles = createGlobalStyle`
  :root {
    --comment: #5E6673;

    & body.dark {
      --comment: #848d9A;
    }
  }

  pre {
    border: 0.25rem solid var(--secondary-background);
    border-radius: ${p => p.theme.radius} ${p => p.theme.radius} 0 0;
    margin-bottom: var(--spacing);
    overflow-x: auto;
    padding: calc(var(--spacing) / 2);
    code {
      padding: 0;
    }
  }

  /* The div with this class only renders if the web component works. */
  .code-block {
    margin-bottom: var(--spacing);
    pre {
      margin-bottom: 0;
    }
    &__header {
      background-color: var(--secondary-background);
      border-radius: 0 0 ${p => p.theme.radius} ${p => p.theme.radius};
      display: flex;
      justify-content: flex-end;
      padding: 0 calc(var(--spacing) / 8);
      button {
        color: var(--accent);
        display: inline-flex;
        font-family: ${p => p.theme.font.familyMono};
        font-size: 0.833rem;
        justify-content: center;
        letter-spacing: 2px;
        line-height: 2.1rem;
        text-transform: uppercase;
      }
    }
  }


  .hljs-comment,
  .hljs-quote {
    color: var(--comment);
    font-style: italic;
  }
`;

export default SyntaxStyles;
