import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from './utils/default-theme';
import GlobalStyle from './utils/default-theme/css';

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

export { defaultTheme };
export default BlockdemyUI;
