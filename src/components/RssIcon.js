import styled from 'styled-components';

const StyledIcon = styled.svg`
  stroke: currentColor;
  margin-right: 1rem;
`;

const RssIcon = () => (
  <StyledIcon
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16" />
    <circle cx="5" cy="19" r="1" />
  </StyledIcon>
);

export default RssIcon;
