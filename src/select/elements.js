import styled from "styled-components";
import RoundArrowDropDown from "react-md-icon/dist/RoundArrowDropDown";
import getOptionsButtonTop from "./utils";
import { space } from "styled-system";

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
  font-weight: "light";
  color: ${({ theme }) => theme.colors.default};
  text-align: left;
  margin-bottom: 10px;
  margin-top: 10px;

  ${({ theme, success }) =>
    success && `color: ${theme.colors.success} !important;`};
  ${({ theme, warning }) =>
    warning && `color: ${theme.colors.warning} !important;`};
  ${({ theme, error }) => error && `color: ${theme.colors.danger} !important;`};
`;

const PseudoSelect = styled.select`
  background-color: ${({ theme }) => theme.colors.lighter};
  font-weight: "light";
  font-size: 0.875rem;
  border-radius: 5px;
  flex-grow: 1;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 0.625rem 0.75rem;
  -webkit-appearance: initial;
  -moz-appearance: initial;
  appearance: initial;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${({ disabled, theme }) =>
    disabled &&
    `
    background-color: ${theme.colors.light};
  `}

  ${({ value }) =>
    !value &&
    `
    color: #808080;
  `};

  ${({ leftIcon }) =>
    leftIcon &&
    `
    padding-left: 2.5rem;
    `};

  ${({ prefix }) =>
    prefix &&
    `
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    `};

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    ${({ success, theme }) =>
      success &&
      `
        border: 1px solid ${theme.colors.success} !important;
      `};
    ${({ warning, theme }) =>
      warning &&
      `
        border: 1px solid ${theme.colors.warning} !important;
      `};
    ${({ error, theme }) =>
      error &&
      `
        border: 1px solid ${theme.colors.danger} !important;
      `};
  }
`;

const LeftIconContainer = styled.div`
  position: absolute;
  display: block;
  left: 0;
  padding: 0.675rem 0.75rem;
  color: ${({ theme }) => theme.colors.lightDark};
  font-size: 16px;

  ${({ message }) =>
    message &&
    `
    margin-top: 0px;
  `};

  ${({ active, theme, success, warning, error }) =>
    active &&
    `
	svg {
		color: ${theme.colors.secondary};
    ${success &&
      `
      color: ${theme.colors.success} !important;
    `};
  ${warning &&
    `
      color: ${theme.colors.warning} !important;
    `};
  ${error &&
    `
      color: ${theme.colors.danger} !important;
    `};
	}
`};
`;

const OptionsButton = styled(RoundArrowDropDown)`
  top: ${getOptionsButtonTop};
  right: 0;
  color: rgba(0, 0, 0, 0.54);
  position: absolute;
  pointer-events: none;
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 24px;
`;

const SelectGroup = styled.div`
  display: flex;
`;

const Prefix = styled.span`
  background-color: ${({ theme }) => theme.colors.veryLightGrey};
  font-weight: "light";
  font-size: 0.875rem;
  border-top-left-radius: 5px;
  color: ${({ theme }) => theme.colors.lightGrey};
  border-bottom-left-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  border-right: none;
  padding: 0.625rem 0.75rem;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  ${({ leftIcon }) =>
    leftIcon &&
    `
    padding-left: 2.5rem;
    `};
`;

export {
  Container,
  Label,
  Message,
  LeftIconContainer,
  PseudoSelect,
  OptionsButton,
  SelectGroup,
  Prefix
};
