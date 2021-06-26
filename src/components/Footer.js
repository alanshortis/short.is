import styled from 'styled-components';
import { Label } from '../components';

const StyledFooter = styled.footer`
  max-width: ${p => p.theme.articleWidth};
  padding: var(--spacing);
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @supports (padding-bottom: env(safe-area-inset-bottom)) {
    padding-bottom: calc(var(--safe-area-inset-bottom) + var(--spacing));
  }
`;

const Footer = ({ meta }) => (
  <StyledFooter>
    <Label currentColor>
      &copy; {meta.year} {meta.author}
    </Label>
    <Label>
      <a href="#top">&uarr; Top</a>
    </Label>
  </StyledFooter>
);

export default Footer;
