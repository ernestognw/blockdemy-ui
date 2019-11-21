import styled from "styled-components";
import { Card } from "../card";

const Route = styled.div`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ last }) => (last ? "bold" : "initial")};
  cursor: ${({ last }) => (last ? "initial" : "pointer")};
  color: ${({ last, theme, lastColor, prevColor }) =>
    last ? theme.colors[lastColor] : theme.colors[prevColor]};

  ${({ last, theme }) =>
    !last &&
    `&:after {
      content: "/";
      margin-left: 0.4rem;
      margin-right: 0.4rem;
      color: ${theme.colors.lightGrey};
    }`}
`;

const Container = styled(Card)`
  border-radius: 0;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }
`;

export { Route, Container };
