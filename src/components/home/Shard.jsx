import styled from 'styled-components';
import { transparentize } from 'polished';

const Shard = styled.div`
  background-image: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0),
    ${p => transparentize(0.9, p.theme.color.typeLight)}
  );
  flex: 1;
  height: 75vh;
  max-width: 10rem;
  position: relative;
  transform: skew(22.5deg) rotate(22.5deg);
  width: 100%;
  &::before {
    background-color: ${p => p.theme.color.typeLight};
    border-radius: 0.25rem;
    box-shadow: 0 0 2rem 0.25rem ${p => transparentize(0.5, p.theme.color.typeLight)};
    content: '';
    height: 0.25rem;
    position: absolute;
    width: 100%;
  }
`;

export default Shard;
