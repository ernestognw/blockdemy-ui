import styled from 'styled-components';
import { Navbar } from 'blockdemy-ui';

const LogoContainer = styled.div`
  width: 120px;
  height: 37px;
`;

const Logo = styled.img`
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin-left: 40px;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.colors.default};
  border-color: ${props => props.theme.colors.default};
`;

const Container = styled(Navbar)``;

export { Logo, LogoContainer, Content, Container };
