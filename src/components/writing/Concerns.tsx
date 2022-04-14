import type { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { VisuallyHidden } from '..';

const spinMeRightRound = keyframes`
  {
    100% {
      transform: rotate(1turn);
    }
  }
`;

const ConcernContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing);
`;

const StyledConcern = styled.div<{ asComponent?: boolean }>`
  align-items: center;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  position: relative;
  width: ${p => (p.asComponent ? '10rem' : '5rem')};
  &::after {
    content: '';
    border-radius: 100%;
    border: 1px dashed currentColor;
    inset: 0;
    position: absolute;
    @media ${p => p.theme.media.shouldAnimate} {
      animation: ${spinMeRightRound} 10s infinite linear;
    }
  }
  &:not(:last-child) {
    margin-right: calc(var(--spacing) / 2);
  }
  p {
    text-align: center;
  }
`;

interface Props {
  asComponent?: boolean;
}

export const Concerns: FC<Props> = ({ asComponent }) => {
  const techs = ['HTML', 'CSS', 'JS'];

  return (
    <ConcernContainer>
      {asComponent ? (
        <>
          {techs.map(tech => (
            <StyledConcern key={tech} asComponent>
              <VisuallyHidden as="h3">Component</VisuallyHidden>
              <p>
                HTML
                <br />
                CSS
                <br />
                JS
              </p>
            </StyledConcern>
          ))}
        </>
      ) : (
        <>
          {techs.map(tech => (
            <StyledConcern key={tech}>
              <VisuallyHidden as="h3">Technology</VisuallyHidden>
              <p>{tech}</p>
            </StyledConcern>
          ))}
        </>
      )}
    </ConcernContainer>
  );
};
