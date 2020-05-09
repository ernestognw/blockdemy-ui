import styled from 'styled-components';
import { color } from 'styled-system';

const Container = styled.nav`
  height: 66px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  z-index: 200;
  transition: all 0.3s ease;
  background-color: ${({ theme, color: colorProp }) => theme.colors[colorProp]};
  ${color}

  ${({ shadow, theme }) => (shadow ? `box-shadow: ${theme.shadow};` : '')}

  ${({ hideBg }) =>
    hideBg
      ? `
        background-position-y: -66px;
        background-color: transparent;
      `
      : ''};

  ${({ hideNavbar }) =>
    hideNavbar
      ? `
        opacity: 0;
        margin-top: -66px;
      `
      : ''};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  background-position-y: 0px;
  width: 100%;
  padding: 0 20px;

  ${({ theme }) => theme.media.tablet`
      padding: 0 20px;    
  `};

  ${({ shrink, theme }) =>
    shrink
      ? `
        max-width: ${theme.maxWidth};
        margin-left: auto;
        margin-right: auto;
      `
      : ''}
`;

export { Container, Content };
