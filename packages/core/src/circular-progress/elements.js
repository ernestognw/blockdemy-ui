import styled, { css, keyframes } from 'styled-components';
import Box from '../box';
import { getCircleProps } from './utils';

const circularProgressCircle = keyframes`
  0% {
    stroke-dasharray: 1, 400;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 400, 400;
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dasharray: 400, 400;
    stroke-dashoffset: -300;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const indeterminateAnimation = css`
  transition: ${'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'};
  animation: ${circularProgressCircle} 1.5s ease-in-out infinite;
  stroke-dasharray: ${'1 400'};
  stroke-dashoffset: ${'0'};
`;

const indeterminateSvgAnimation = css`
  animation: ${spin} 2s linear infinite;
  transform-origin: ${'50% 50%'};
`;

const Label = styled(Box)`
  font-variant-numeric: tabular-nums;
  transform: translate(-50%, -50%);
  line-height: 1;
  position: absolute;
  top: 50%;
  left: 50%;
`;

const IndicatorCircle = styled.circle`
  color: ${({ theme, color }) => theme.colors[color]};
  ${getCircleProps}
  stroke-linecap: ${({ lineCap }) => lineCap};

  ${({ indeterminate }) => (indeterminate ? indeterminateAnimation : '')};
`;

const TrackCircle = styled.circle`
  color: ${({ theme, color }) => theme.colors[color]}60;
  ${getCircleProps};
  stroke-dashoffset: 0;
`;

const Svg = styled.svg`
  vertical-align: top;
  transform: rotate3d(0, 0, 1, ${({ angle }) => angle - 90}deg);

  ${({ indeterminate }) => (indeterminate ? indeterminateSvgAnimation : '')};
`;

const Container = styled(Box)`
  display: inline-block;
  position: relative;
  vertical-align: middle;
`;

export { Label, IndicatorCircle, TrackCircle, Svg, Container };
