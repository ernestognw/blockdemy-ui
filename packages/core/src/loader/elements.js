import styled, { keyframes } from 'styled-components';
import { space } from 'styled-system';
import Box from '../box';

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrapper = styled(Box)`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  color: ${({ theme, color }) => theme.colors[color]};
  animation: ${rotation} 1s linear infinite;

  ${space}
`;

export default LoaderWrapper;
