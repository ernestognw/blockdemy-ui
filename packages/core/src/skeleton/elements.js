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
  border-color: ${({ firstColor, theme }) => theme.colors[firstColor]};
  box-shadow: none;
  opacity: 0.7;
  background: ${({ firstColor, theme }) => theme.colors[firstColor]};
  background-clip: padding-box;
  cursor: default;

  /* Transparent text will occupy space but be invisible to the user */
  color: transparent;
  animation: ${({ speed }) => speed}s linear infinite alternate
    ${({ firstColor, lastColor, theme }) =>
      skeletonGlow(`${theme.colors[firstColor]}`, `${theme.colors[lastColor]}`)};
  pointer-events: none;
  user-select: none;

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
