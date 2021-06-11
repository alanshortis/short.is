import styled from 'styled-components';

const VisuallyHidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  width: 1px;
`;

export default VisuallyHidden;
