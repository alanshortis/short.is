import styled from 'styled-components';

const Orb = styled.div`
  background-image: linear-gradient(
    0deg,
    ${p => p.theme.color.backgroundDark},
    ${p => p.theme.color.accent}
  );
  border-radius: 50%;
  box-shadow: inset 0 0 5em 0 ${p => p.theme.color.backgroundDark};
  margin: 0 1rem;
  max-width: 500px;
  width: 100%;
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`;

export default Orb;
