import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.ol`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: var(--margin);
  margin: 0 auto;
  max-width: ${p => p.theme.container};
  padding: var(--margin);
  width: 100%;
  @media ${p => p.theme.media.smallMin} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled(Link)`
  border: ${p => p.theme.border} solid currentColor;
  box-shadow: 0 0 0 0 currentColor;
  color: currentColor;
  display: block;
  height: 100%;
  padding: var(--margin);
  text-decoration: none;
  transition: box-shadow ${p => p.theme.transitionSpeed} ${p => p.theme.transitionTiming};
  &:hover {
    box-shadow: 0 0 0 ${p => p.theme.border} currentColor;
  }
`;

const ItemContainer = styled.li`
  &:first-child {
    grid-column: 1 / -1;
  }
`;

export default { Container, Item, ItemContainer };
