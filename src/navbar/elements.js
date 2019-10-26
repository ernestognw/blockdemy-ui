import styled from "styled-components";
import { color } from "styled-system";

const Container = styled.nav`
  height: 66px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  z-index: 200;
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.lighter};
  box-shadow: ${({ theme }) => theme.shadow};
  ${color}
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-position-y: 0px;
  width: 100%;
  padding: 0 20px;

  ${({ theme }) => theme.media.tablet`
      padding: 0 20px;    
  `};
`;

export { Container, Content };
