import styled from 'styled-components';

const StyledSmall = styled.small`
  background-color: var(--secondary-background);
  border-radius: ${p => p.theme.radius};
  display: block;
  font-size: 0.833rem;
  grid-column: 1 / 3;
  margin-bottom: var(--spacing);
  padding: calc(var(--spacing) / 4);
  @media ${p => p.theme.media.medium} {
    grid-column: 1 / 13;
  }
`;

const Disclaimer = () => (
  <StyledSmall>
    This post is more than two years old. Things change fast, and the content may no longer be completely
    relevant.
  </StyledSmall>
);

export default Disclaimer;
