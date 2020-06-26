import styled, { css } from 'styled-components';
import Box from '../box';
import { getThumbSize, getTrackHeight } from './utils/style';

const centeredProps = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const ThumbBox = styled(Box)`
  ${centeredProps};
  z-index: 1;
  width: ${getThumbSize};
  height: ${getThumbSize};
  border-radius: 9999px;
  background-color: ${props => props.theme.colors.veryLight};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  left: calc(${props => props.trackPercent}% - ${getThumbSize} / 2);
  border: 1px solid transparent;
  transition: transform 0.2s;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    box-shadow: ${props => props.theme.colors[`${props.color}Soft300`]} 0px 0px 0px 3px;
  }

  &:disabled {
    background-color: ${props => props.theme.colors.lightGrey};
  }

  &:active {
    box-shadow: ${props => props.theme.colors[`${props.color}Soft300`]} 0px 0px 0px 3px;
    transform: translateY(-50%) scale(1.15);
  }
`;

const TrackBox = styled(Box)`
  height: ${getTrackHeight};
  border-radius: 0.125rem;
  width: 100%;
  ${centeredProps};
  background-color: ${props => props.theme.colors[`${props.color}Soft200`]};
`;

const FilledTrackBox = styled(Box)`
  ${centeredProps};
  height: ${getTrackHeight};
  background-color: ${props => props.theme.colors[props.color]};
  width: ${props => props.trackPercent}%;
  border-radius: 0.125rem;
`;

const SliderBox = styled(Box)`
  width: 100%;
  display: inline-block;
  position: relative;
  cursor: pointer;
  touch-action: none;

  &:disabled: {
    opacity: 0.6;
    cursor: default;
    pointer-events: none;
  }
`;

export { ThumbBox, TrackBox, FilledTrackBox, SliderBox };
