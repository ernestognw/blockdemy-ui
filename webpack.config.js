const path = require('path');

module.exports = {
  entry: {
    index: './src/index',
    alert: './src/alert',
    avatar: './src/avatar',
    badge: './src/badge',
    box: './src/box',
    button: './src/button',
    checkbox: './src/checkbox',
    collapse: './src/collapse',
    breadcrumb: './src/breadcrumb',
    card: './src/card',
    hooks: './src/hooks',
    input: './src/input',
    list: './src/list',
    loader: './src/loader',
    modal: './src/modal',
    navbar: './src/navbar',
    pill: './src/pill',
    'side-modal': './src/side-modal',
    select: './src/select',
    radio: './src/radio',
    table: './src/table',
    tab: './src/tab',
    textarea: './src/textarea',
    toast: './src/toast',
    tooltip: './src/tooltip',
    typography: './src/typography'
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|lib)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  externals: {
    'styled-components': 'styled-components',
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom'
  }
};
