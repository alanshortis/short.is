import { createGlobalStyle } from 'styled-components';

const SyntaxStyles = createGlobalStyle`
  :root {
    --comment: #5E6673;
    --literal: #2B6E78;
    --symbol: #1269AF;
    --keyword: #9E30C0;
    --string: #496D31;
    --name: #BF2B2B;
    --attr: #8D5A2A;
    --title: #855F19;

    & body.dark {
      --comment: #848d9A;
      --literal: #56b6c2;
      --symbol: #61aeee;
      --keyword: #c678dd;
      --string: #98c379;
      --name: #de6e6e;
      --attr: #d19a66;
      --title: #e6c07b;
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
  }


  .hljs-comment,
  .hljs-quote {
    color: var(--comment);
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: var(--keyword);
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: var(--name);
  }

  .hljs-literal {
    color: var(--literal);
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta .hljs-string {
    color: var(--string);
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: var(--attr);
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: var(--symbol);
  }

  .hljs-built_in,
  .hljs-title.class_,
  .hljs-class .hljs-title {
    color: var(--title);
  }
`;

export default SyntaxStyles;
