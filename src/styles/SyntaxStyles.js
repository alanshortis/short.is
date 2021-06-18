import { createGlobalStyle } from 'styled-components';

const SyntaxStyles = createGlobalStyle`
  :root {
    --mono-3: #a0a1a7;
    --hue-1: #0184bb;
    --hue-2: #4078f2;
    --hue-3: #a626a4;
    --hue-4: #50a14f;
    --hue-5: #e45649;
    --hue-6: #986801;
    --hue-6-2: #c18401;

    & body.dark {
      --mono-3: #5c6370;
      --hue-1: #56b6c2;
      --hue-2: #61aeee;
      --hue-3: #c678dd;
      --hue-4: #98c379;
      --hue-5: #e06c75;
      --hue-6: #d19a66;
      --hue-6-2: #e6c07b;
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
    color: var(--mono-3);
    font-style: italic;
  }

  .hljs-doctag,
  .hljs-keyword,
  .hljs-formula {
    color: var(--hue-3);
  }

  .hljs-section,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-deletion,
  .hljs-subst {
    color: var(--hue-5);
  }

  .hljs-literal {
    color: var(--hue-1);
  }

  .hljs-string,
  .hljs-regexp,
  .hljs-addition,
  .hljs-attribute,
  .hljs-meta .hljs-string {
    color: var(--hue-4);
  }

  .hljs-attr,
  .hljs-variable,
  .hljs-template-variable,
  .hljs-type,
  .hljs-selector-class,
  .hljs-selector-attr,
  .hljs-selector-pseudo,
  .hljs-number {
    color: var(--hue-6);
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-link,
  .hljs-meta,
  .hljs-selector-id,
  .hljs-title {
    color: var(--hue-2);
  }

  .hljs-built_in,
  .hljs-title.class_,
  .hljs-class .hljs-title {
    color: var(--hue-6-2);
  }
`;

export default SyntaxStyles;
