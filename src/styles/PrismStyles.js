import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';

const PrismStyles = createGlobalStyle`
  code {
    font-family: ${p => p.theme.font.faceMono};
    p & {
      background-color: #ddd;
      border-radius: ${rem('4px')};
      font-size: 0.9em;
      padding: ${rem('2px')} 0.5rem;
    }
  }

  .gatsby-highlight {
    background-color: ${p => p.theme.color.backgroundDark};
    border-radius: 4px;
    color: ${p => p.theme.color.accent};
    padding: 1rem;
    margin-bottom: 1rem;
    font-size: ${rem('14px')};
    overflow-x: scroll;
    @media (max-width: 60rem) {
      width: 100vw;
      position: relative;
      left: 50%;
      right: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      border-radius: 0;
      padding: 1rem 2rem;
    }
  }

  .parameter {
    color: ${p => p.theme.color.accent};
  }

  .function {
    color: ${p => p.theme.color.complement};
  }

  .operator,
  .regex {
    color: ${p => p.theme.color.complement};
  }

  .keyword,
  .boolean {
    font-style: italic;
    color: ${p => p.theme.color.quarternary};
  }

  .comment {
    font-style: italic;
    color: ${p => p.theme.color.typeMid};
  }

  .attr-name {
    font-style: italic;
    color: ${p => p.theme.color.secondary};
  }

  .tag {
    color: ${p => p.theme.color.accent};
  }

  .attr-value,
  .string {
    color: ${p => p.theme.color.tertiary};
  }

  .class-name,
  .number {
    color: ${p => p.theme.color.secondary};
  }

  .script {
    ${p => p.theme.color.accent};
  }

  .punctuation,
  .plain-text,
  .language-bash {
    color: ${p => p.theme.color.typeLight};
  }

  .language-scss {
    .property {
      color: ${p => p.theme.color.typeLight};
    }
    .selector {
      color: ${p => p.theme.color.secondary};
    }
  }

  .language-liquid {
    .operator {
      color: ${p => p.theme.color.typeLight};
    }
    .regex {
      color: ${p => p.theme.color.complement};
    }
  }

  .gatsby-highlight-code-line {
    display: block;
    width: calc(100% + 2rem);
    margin-left: -1rem;
    padding-left: 1rem;
    background-color: ${p => p.theme.color.backgroundMid};
  }
`;

export default PrismStyles;
