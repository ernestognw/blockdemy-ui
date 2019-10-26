import styled from "styled-components";
import { Card, CardBody } from "../card";
import { color, space } from "styled-system";

const Container = styled(Card)`
  width: 100%;
  border-left: 4px solid ${({ theme, type }) => theme.colors[type]};
  margin-bottom: 20px;
  margin-top: 10px;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadow};
  }

  ${color}
  ${space}
`;

const Body = styled(CardBody)`
  display: flex;

  svg {
    color: ${({ theme, type }) => theme.colors[type]};
    font-size: 22px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  font-size: 20px;
`;

export { Container, Body, Text, IconContainer };
