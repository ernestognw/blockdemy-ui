import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../utils/default-theme';
import ToastComponent from './components/toast-component';

const defaultOptions = {
  autoClose: 3000
};

class Toast {
  constructor(theme) {
    this.theme = { ...defaultTheme, ...theme };
  }

  toast = {
    primary: (title, message, options) => this.createToast('primary', title, message, options),
    secondary: (title, message, options) => this.createToast('secondary', title, message, options),
    success: (title, message, options) => this.createToast('success', title, message, options),
    info: (title, message, options) => this.createToast('info', title, message, options),
    default: (title, message, options) => this.createToast('default', title, message, options),
    warning: (title, message, options) => this.createToast('warning', title, message, options),
    danger: (title, message, options) => this.createToast('danger', title, message, options)
  };

  createToast = (type, title, message, options = defaultOptions) => {
    // Inside of component because if we put this out, ssr would crash,
    // due to inexistence of document at server
    const toastRoot = document.getElementById('toast');

    const toastContainer = document.createElement('div');
    toastRoot.appendChild(toastContainer);

    const removeElements = () => {
      unmountComponentAtNode(toastContainer);
      toastRoot.removeChild(toastContainer);
    };

    render(
      <ThemeProvider theme={this.theme}>
        <ToastComponent
          removeElements={removeElements}
          title={title}
          message={message}
          type={type}
          options={{ ...defaultOptions, options }}
        />
      </ThemeProvider>,
      toastContainer
    );
  };
}

export default Toast;
