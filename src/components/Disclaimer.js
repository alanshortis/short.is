import styled from 'styled-components';

const StyledSmall = styled.small`
  background-color: var(--secondary-background);
  border-radius: ${p => p.theme.radius};
  color: var(--accent);
  display: block;
  font-size: 0.833rem;
  margin-bottom: var(--spacing);
  padding: calc(var(--spacing) / 4);
`;

const Disclaimer = () => (
  <StyledSmall>
    This post is more than two years old. Things change fast, and the content may no longer be completely
    relevant.
  </StyledSmall>
);

export default Disclaimer;
