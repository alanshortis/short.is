import styled from 'styled-components';

const Anaglyph = styled.div`
  border: 1px solid ${p => p.theme.color.typeLight};
  border-radius: 50%;
  box-shadow: 0.25em 0 1em 0 ${p => p.theme.color.accent},
    -0.25em 0 1em 0 ${p => p.theme.color.complement},
    inset 0.25em 0 1em 0 ${p => p.theme.color.accent},
    inset -0.25em 0 1em 0 ${p => p.theme.color.complement};
  margin: 0 auto;
  margin-bottom: calc(${p => p.theme.contentMargin} * 2);
  max-width: 420px;
  width: 100%;
  @media ${p => p.theme.media.mediumMin} {
    margin: 0;
    margin-left: calc(${p => p.theme.contentMargin} * 2);
  }
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export default Anaglyph;
