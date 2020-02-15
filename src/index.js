import React from 'react';
import { ThemeProvider, ServerStyleSheet } from 'styled-components';
import defaultTheme from './utils/default-theme';
import GlobalStyle from './utils/default-theme/css';

export { ServerStyleSheet };

class BlockdemyUI {
  constructor(theme) {
    this.theme = { ...defaultTheme, ...theme };
  }

  getTheme = () => this.theme;

  BlockdemyUIProvider = props => (
    <ThemeProvider theme={this.theme} {...props}>
      <>
        <GlobalStyle />
        <div id="toast" />
        <div id="tooltips" />
        <div id="modal" />
        {props.children}
      </>
    </ThemeProvider>
  );
}

export default BlockdemyUI;
