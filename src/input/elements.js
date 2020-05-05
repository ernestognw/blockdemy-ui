import styled from 'styled-components';
import { space } from 'styled-system';

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
  font-size: 10px;

  ${({ theme, success }) => (success ? `color: ${theme.colors.success} !important;` : '')};
  ${({ theme, warning }) => (warning ? `color: ${theme.colors.warning} !important;` : '')};
  ${({ theme, error }) => (error ? `color: ${theme.colors.danger} !important;` : '')};
`;

const PseudoInput = styled.input`
  background-color: ${({ theme }) => theme.colors.lighter};
  font-size: 0.875rem;
  border-radius: ${({ theme }) => theme.radius};
  flex-grow: 1;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.veryLightGrey};
  padding: 0.625rem 0.75rem;
  -webkit-appearance: initial;
  -moz-appearance: initial;
  appearance: initial;
  transition: all .45s ease;

  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  ${({ theme, disabled }) =>
    disabled
      ? `
        background-color: ${theme.colors.light};
        cursor: not-allowed;
      `
      : ''}

  ${({ align }) =>
    align
      ? `
    text-align: ${align}
  `
      : ''}

  ${({ leftIcon }) => (leftIcon ? 'padding-left: 2.5rem;' : '')};
  
  ${({ rightIcon }) => (rightIcon ? 'padding-right: 2.5rem;' : '')};

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
        ${success ? `border: 1px solid ${theme.colors.success}; ` : ''};
        ${warning ? `border: 1px solid ${theme.colors.warning}; ` : ''};
        ${error ? `border: 1px solid ${theme.colors.danger};` : ''};
      `
      : ''}

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors[theme.activeColor]};
    box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors[theme.activeColor]}33;
  }

  ${({ theme }) => theme.media.phone`
    width: auto;
  `};
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
          color: ${theme.colors[theme.activeColor]};
          ${success ? `color: ${theme.colors.success} !important;` : ''};
          ${warning ? `color: ${theme.colors.warning} !important;` : ''};
          ${error ? `color: ${theme.colors.danger} !important;` : ''};
        }`
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
            color: ${theme.colors[theme.activeColor]};
            ${success ? `color: ${theme.colors.success} !important;` : ''};
            ${warning ? `color: ${theme.colors.warning} !important;` : ''};
            ${error ? `color: ${theme.colors.danger} !important;` : ''};
        }`
      : ''};
`;

const InputGroup = styled.div`
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
  PseudoInput,
  Label,
  Message,
  LeftIconContainer,
  RightIconContainer,
  InputGroup,
  Prefix,
  Suffix
};
