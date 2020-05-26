import styled from 'styled-components';
import Box from '../box';
import { getControlBoxSize, getCircleBoxSize, getCircleTranslate } from './utils';

const CircleBox = styled(Box)`
  ${getCircleBoxSize}
  border-radius: 9999px;
  transition: transform 250ms;
  ${getCircleTranslate}
`;

const ControlBox = styled(Box)`
  ${getControlBoxSize}
  display: flex;
  align-items: center;
  background: ${({ checked, theme, activeColor, inactiveColor }) =>
    checked ? theme.colors[activeColor] : theme.colors[inactiveColor]};
  border-radius: 9999px;
  box-sizing: content-box;
  padding: 2px;
  cursor: pointer;
  transition: background 250ms;

  &:focus-within,
  &:active {
    box-shadow: 0 0 0 0.1rem ${({ theme, activeColor }) => theme.colors[`${activeColor}Soft300`]};
  }

  ${({ disabled }) => (disabled ? 'opacity: 0.4; cursor: not-allowed' : '')}
`;

export { CircleBox, ControlBox };
