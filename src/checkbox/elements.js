import styled from 'styled-components';
import { space } from 'styled-system';
import getSize from './utils';

const Container = styled.div`
  position: relative;
  margin-top: 10px;

  ${space}
`;

const CheckContainer = styled.div`
  background-color: ${({ checked, theme, color }) =>
    checked ? theme.colors[color] : theme.colors.lighter};
  color: ${({ theme }) => theme.colors.lighter};
  display: flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius};
  border: 1.5px solid ${({ theme }) => theme.colors.veryLightGrey};
  justify-content: center;
  transition: background-color 120ms ease 0s, box-shadow 250ms ease 0s;

  ${getSize}

  ${({ checked }) => checked && 'border: none'}

  ${({ theme, success }) => success && `border-color: ${theme.colors.success};`};
  ${({ theme, warning }) => warning && `border-color: ${theme.colors.warning};`};
  ${({ theme, error }) => error && `border-color: ${theme.colors.danger};`};

  ${({ theme, disabled }) =>
    disabled &&
    `
    background-color: ${theme.colors.light};
    color: ${theme.colors.lightGrey};
  `}

  svg {
    padding: 0.1rem;
  }
`;

const ClickableSection = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  * {
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    `
    * {
      cursor: not-allowed;
    }
  `}
`;

export { Container, CheckContainer, ClickableSection };
