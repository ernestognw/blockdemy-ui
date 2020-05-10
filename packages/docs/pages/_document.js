import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    try {
      const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
      const styleTags = sheet.getStyleElement();

      return { ...page, styleTags };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { styleTags } = this.props;
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta title="Blockdemy UI | React Design System" />
          <meta name="theme-color" content="#5B97F2" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <script async defer src="https://buttons.github.io/buttons.js" />
          {styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
