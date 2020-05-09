import styled from 'styled-components';
import { space } from 'styled-system';

const TextAreaContainer = styled.div`
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

const TextAreaContent = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 0.875rem;
  resize: vertical;
  border-radius: ${({ theme }) => theme.radius};
  border: 1px solid ${({ theme }) => theme.colors.veryLightGrey};

  ::placeholder {
    color: ${({ theme }) => theme.colors.lightGrey};
  }

  ::-webkit-scrollbar {
    display: none;
  }

  ${({ disabled, theme }) =>
    disabled
      ? `background-color: ${theme.colors.light};
        cursor: not-allowed;
      `
      : ''}

  &:focus {
    transition: 0.3s;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors[theme.activeColor]};
    box-shadow: 0 0 0 0.1rem ${({ theme }) => theme.colors[theme.activeColor]}33;
  }
`;

export { TextAreaContainer, Label, TextAreaContent };