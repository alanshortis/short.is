import styled from 'styled-components';

const StyledWc = styled.div`
  margin-left: 1rem;
  button {
    width: 1.5rem;
  }
  button > svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const SchemeToggle = () => (
  <StyledWc>
    <scheme-toggle></scheme-toggle>
  </StyledWc>
);

export default SchemeToggle;
