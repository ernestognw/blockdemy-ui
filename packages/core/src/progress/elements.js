import styled from 'styled-components';
import Box from '../box';
import { getIndeterminateStyle, getStripeStyle, getAnimateStyle } from './utils';

const ProgressIndicator = styled(Box)`
  height: 100%;
  transition: all 0.3s;
  border-radius: ${props => props.radius || props.theme.radius};

  ${getIndeterminateStyle}
  ${getStripeStyle}
  ${getAnimateStyle}
`;

const ProgressTrack = styled(Box)`
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.trackRadius || props.theme.radius};
`;

export { ProgressIndicator, ProgressTrack };
