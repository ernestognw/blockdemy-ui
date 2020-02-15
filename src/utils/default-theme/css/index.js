import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  html,
  body {
    min-height: 100%;
    min-width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-family: ${({ theme }) => theme.font};
    line-height: 1.5;
    position: relative;
    height: 100%;
    max-height: 100%;
    width: 100%;
  }

  body a {
    display: contents;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  #tooltips {
    position: absolute;
    top: 0;
    left: 0;
    pre {
      font-family: ${({ theme }) => theme.font};
    }
  }

  #toast {
    z-index: 3500;
    position: fixed;
    top: 65px;
    right: 0;
    padding: 4px;
    width: 320px;
    box-sizing: border-box;
    animation: all 0.5 ease;
  }

  @media (max-width: 36em) {
    #toast {
      width: 100%;
    }
  }
`;

export default GlobalStyle;
