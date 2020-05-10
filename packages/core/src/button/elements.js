import styled from 'styled-components';
import { space, typography, position } from 'styled-system';
import { getStyle, getSize } from './utils';

const Button = styled.button`
  position: relative;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  font-weight: 600;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: ${({ width }) => width || 'max-content'};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'initial')};
  letter-spacing: 1px;

  ${space}
  ${getSize};
  ${getStyle};
  ${typography}
  ${position}

  &:focus {
    outline: none;
  }

  &:before {
    margin-left: 10px;
    display: flex;
    flex: 1;
  }

  ${({ beforeContent }) =>
    beforeContent
      ? ` &:before {
            content: '${beforeContent}';
            position: 'absolute';
          };
        `
      : ''};

  ${({ afterContent }) =>
    afterContent
      ? ` &:after {
            content: '${afterContent}';
            margin-right: 10px;
            display: flex;
            flex: 1;
            font-size: 10px;
            text-transform: capitalize;
          };
        `
      : ''};

  ${({ fullWidth }) => (fullWidth ? 'width: 100%;' : '')};

  ${({ disabled, theme }) =>
    disabled
      ? `
        color: ${theme.colors.dark};
        background: ${theme.colors.veryLightGrey};
        cursor: initial;
        box-shadow: none;
        border: none;
        &:hover {
          color: ${theme.colors.dark};
          border: none;
          box-shadow: none;
          background: ${theme.colors.veryLightGrey};
        }
        cursor: not-allowed;
      `
      : ''};

  ${({ alignSelf }) => (alignSelf ? `align-self: ${alignSelf};` : '')};
`;

export default Button;
