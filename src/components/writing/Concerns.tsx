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
  --animation-speed: ${p => (p.asComponent ? '20s' : '10s')};
  --size: ${p => (p.asComponent ? '10rem' : '5rem')};

  align-items: center;
  display: flex;
  height: var(--size);
  justify-content: center;
  position: relative;
  width: var(--size);
  &::after {
    content: '';
    border-radius: 100%;
    border: 1px dashed currentColor;
    inset: 0;
    position: absolute;
    @media ${p => p.theme.media.shouldAnimate} {
      animation: ${spinMeRightRound} var(--animation-speed) infinite linear;
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
