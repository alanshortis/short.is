import styled from 'styled-components';

const Label = styled.span`
  color: ${p => (p.currentColor ? 'currentColor' : 'var(--accent)')};
  font-size: 0.833rem;
  font-family: ${p => p.theme.font.familyMono};
  letter-spacing: 2px;
  line-height: 2.1rem;
  text-transform: uppercase;
`;

export default Label;
