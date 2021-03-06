import styled from 'styled-components';
import { space } from 'styled-system';
import getOptionsButtonTop from './utils';

const Container = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;

  ${space}
`;

const Label = styled.label`
  display: inline-block;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.lightGrey};
  text-align: left;
  margin-bottom: 10px;
`;

const Message = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.default};
  text-align: left;
  margin-bottom: 10px;
  margin-top: 10px;

  ${({ theme, success }) => (success ? `color: ${theme.colors.success} !important;` : '')};
  ${({ theme, warning }) => (warning ? `color: ${theme.colors.warning} !important;` : '')};
  ${({ theme, error }) => (error ? `color: ${theme.colors.danger} !important;` : '')};
`;

const PseudoSelect = styled.select`
  background-color: ${({ theme }) => theme.colors.lighter};
  font-size: 0.875rem;
  border-radius: ${({ theme }) => theme.radius};
  flex-grow: 1;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
  padding: 0.625rem 1.5rem 0.625rem 0.75rem;
  appearance: initial;
  transition: all 0.45s ease;

  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  ${({ disabled, theme }) =>
    disabled
      ? `
        background-color: ${theme.colors.light};
        cursor: not-allowed;
      `
      : ' '}

  ${({ value }) => (!value ? 'color: #808080;' : '')};

  ${({ leftIcon }) => (leftIcon ? 'padding-left: 2.5rem;' : '')};

  ${({ rightIcon }) => (rightIcon ? 'padding-right: 3.5rem;' : '')};

  ${({ prefix }) =>
    prefix
      ? `
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      `
      : ''};

  ${({ suffix }) =>
    suffix
      ? `
        border-right: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      `
      : ''};

  ${({ readOnly, theme, success, warning, error }) =>
    !readOnly
      ? `
        ${success ? `border: 1px solid ${theme.colors.success};` : ''};
        ${warning ? `border: 1px solid ${theme.colors.warning};` : ''};
        ${error ? `border: 1px solid ${theme.colors.danger};` : ''};
      `
      : ''}

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors.primarySoft200};
  }
`;

const LeftIconContainer = styled.div`
  position: absolute;
  display: block;
  left: 0;
  padding: 0.675rem 0.75rem;
  color: ${({ theme }) => theme.colors.lightDark};
  font-size: 16px;

  ${({ message }) => (message ? 'margin-top: 0px;' : '')};

  ${({ active, theme, success, warning, error }) =>
    active
      ? `svg {
          color: ${theme.colors.primary};
          ${success ? `color: ${theme.colors.success} !important;` : ''};
          ${warning ? `color: ${theme.colors.warning} !important;` : ''};
          ${error ? `color: ${theme.colors.danger} !important;` : ''};
        }
      `
      : ''};
`;

const RightIconContainer = styled.div`
  position: absolute;
  display: block;
  right: 0;
  padding: 0.675rem 0.75rem;
  color: ${({ theme }) => theme.colors.lightDark};
  font-size: 16px;

  ${({ message }) => (message ? 'margin-top: 0px;' : '')};

  ${({ active, theme, success, warning, error }) =>
    active
      ? `svg {
          color: ${theme.colors.primary};
          ${success ? `color: ${theme.colors.success} !important;` : ''};
          ${warning ? `color: ${theme.colors.warning} !important;` : ''};
          ${error ? `color: ${theme.colors.danger} !important;` : ''};
        }
      `
      : ''};
`;

const OptionsButton = styled.div`
  svg {
    top: ${getOptionsButtonTop};
    right: ${({ rightIcon, suffixWidth }) => (rightIcon ? '37px' : `${suffixWidth + 5}px`)};
    color: rgba(0, 0, 0, 0.54);
    position: absolute;
    pointer-events: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 16px;
  }
`;

const SelectGroup = styled.div`
  display: flex;
`;

const Prefix = styled.span`
  background-color: ${({ theme }) => theme.colors.veryLightGrey};
  font-size: 0.875rem;
  border-top-left-radius: 5px;
  color: ${({ theme }) => theme.colors.lightGrey};
  border-bottom-left-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
  border-right: none;
  padding: 0.625rem 0.75rem;
  transition: all 0.45s ease;
`;

const Suffix = styled.span`
  background-color: ${({ theme }) => theme.colors.veryLightGrey};
  font-size: 0.875rem;
  border-top-right-radius: 5px;
  color: ${({ theme }) => theme.colors.lightGrey};
  border-bottom-right-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
  border-left: none;
  padding: 0.625rem 0.75rem;
  transition: all 0.45s ease;
`;

export {
  Container,
  Label,
  Message,
  LeftIconContainer,
  RightIconContainer,
  PseudoSelect,
  OptionsButton,
  SelectGroup,
  Prefix,
  Suffix
};
