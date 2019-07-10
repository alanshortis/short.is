import styled from 'styled-components';

const Article = styled.article`
  background-color: ${p => p.theme.color.background};
  > div {
    max-width: 60rem;
    margin: 0 auto;
    width: 100%;
    padding: 0 2rem;
    font-size: 1.25rem;
    a {
      color: ${p => p.theme.color.accent};
      text-decoration: none;
    }
    p {
      margin-bottom: 1rem;
      + p {
        margin-bottom: 0;
      }
    }
  }
`;

export default Article;
