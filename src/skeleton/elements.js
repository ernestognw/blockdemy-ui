import styled, { keyframes } from 'styled-components';
import Box from '../box';

const skeletonGlow = (firstColor, lastColor) => keyframes`
  from {
    border-color: ${firstColor};
    background: ${firstColor};
  }
  to {
    border-color: ${lastColor};
    background: ${lastColor};
  }
`;

const fadeIn = keyframes`
  from { 
    opacity: 0;
  }
  to { 
    opacity: 1;
  }
`;

const SkeletonContainer = styled(Box)`
  border-color: ${({ firstColor, theme }) => theme.colors[firstColor]}60;
  box-shadow: none;
  opacity: 0.7;
  background: ${({ firstColor, theme }) => theme.colors[firstColor]}60;
  background-clip: padding-box;
  cursor: default;

  /* Transparent text will occupy space but be invisible to the user */
  color: transparent;
  animation: ${({ speed }) => speed}s linear infinite alternate
    ${({ firstColor, lastColor, theme }) =>
      skeletonGlow(`${theme.colors[firstColor]}60`, `${theme.colors[lastColor]}60`)};
  pointer-events: none;
  user-select: none;
  border-radius: ${({ theme }) => theme.radius};

  /* Make pseudo-elements (CSS icons) and children invisible */
  &::before,
  &::after,
  * {
    visibility: hidden;
  }
`;

const ContentContainer = styled(Box)`
  animation: ${fadeIn} ${({ fadeInDuration }) => fadeInDuration}s;
`;

export { SkeletonContainer, ContentContainer };
