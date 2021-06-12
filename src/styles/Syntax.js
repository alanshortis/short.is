import { createGlobalStyle } from 'styled-components';

const Syntax = createGlobalStyle`
  :root {
    --comment: ${p => p.theme.syntax.comment};

    & body.dark {
      --comment: ${p => p.theme.syntax.commentDark};
    }
  }

  .comment {
    font-style: italic;
    color: var(--comment);
  }
`;

export default Syntax;
