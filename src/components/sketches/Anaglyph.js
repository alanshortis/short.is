import styled from 'styled-components';

const Anaglyph = styled.div`
  border: 1px solid ${p => p.theme.color.typeLight};
  border-radius: 50%;
  box-shadow: 0.25em 0 1em 0 ${p => p.theme.color.accent},
    -0.25em 0 1em 0 ${p => p.theme.color.complement},
    inset 0.25em 0 1em 0 ${p => p.theme.color.accent},
    inset -0.25em 0 1em 0 ${p => p.theme.color.complement};
  margin: 0 calc(${p => p.theme.contentMargin} * 2);
  max-width: calc(${p => p.theme.containerNarrow} - ${p => p.theme.contentMargin});
  width: 100%;
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export default Anaglyph;
