import React, { Fragment } from "react";
import { ThemeProvider, withTheme } from "styled-components";
import PropTypes from "prop-types";
import defaultTheme from "./utils/default-theme";
import GlobalStyle from "./utils/default-theme/css";

class BlockdemyUI {
  constructor(theme) {
    this.theme = { ...defaultTheme, ...theme };
  }

  getTheme = () => this.theme;

  BlockdemyUIProvider = ({ ...props }) => (
    <ThemeProvider theme={this.theme} {...props}>
      <Fragment>
        <GlobalStyle />
        <div id="toast" />
        <div id="tooltips" />
        <div id="modal" />
        {props.children}
      </Fragment>
    </ThemeProvider>
  );
}

export default BlockdemyUI;
