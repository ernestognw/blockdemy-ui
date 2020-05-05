import styled from 'styled-components';
import { space } from 'styled-system';
import getSize from './utils';

const Container = styled.div`
  ${space}
`;

const Label = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  text-align: left;
  margin-bottom: 5px;
`;

const Message = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.default};
  text-align: left;
  margin-bottom: 10px;
  margin-top: 10px;
  font-size: 10px;

  ${({ theme, success }) => (success ? `color: ${theme.colors.success} !important;` : '')};
  ${({ theme, warning }) => (warning ? `color: ${theme.colors.warning} !important;` : '')};
  ${({ theme, error }) => (error ? `color: ${theme.colors.danger} !important;` : '')};
`;

const CheckContainer = styled.div`
  background-color: ${({ checked, theme, color }) =>
    checked ? theme.colors[color] : theme.colors.lighter};
  color: ${({ theme }) => theme.colors.lighter};
  display: flex;
  align-items: center;
  border-radius: 50%;
  border: 1.5px solid ${({ theme }) => theme.colors.veryLightGrey};
  justify-content: center;
  transition: background-color 120ms ease 0s, box-shadow 250ms ease 0s;

  ${getSize}

  ${({ theme, success }) => (success ? `border-color: ${theme.colors.success};` : '')};
  ${({ theme, warning }) => (warning ? `border-color: ${theme.colors.warning};` : '')};
  ${({ theme, error }) => (error ? `border-color: ${theme.colors.danger};` : '')};

  ${({ checked }) => (checked ? 'border-color: transparent;' : '')}

  ${({ theme, disabled }) =>
    disabled
      ? `
        background-color: ${theme.colors.light};
        color: ${theme.colors.lightGrey};
      `
      : ''}
`;

const ClickableSection = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  * {
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled
      ? `* {
          cursor: not-allowed;
        }
      `
      : ''}
`;

const Circle = styled.span`
  width: 30%;
  height: 30%;
  background-color: currentColor;
  border-radius: 50%;
  ${({ visible }) => (!visible ? 'visibility: hidden;' : '')}
`;

export { Container, CheckContainer, ClickableSection, Circle, Label, Message };
