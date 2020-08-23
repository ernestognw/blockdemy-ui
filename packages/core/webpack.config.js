const path = require('path');

module.exports = {
  entry: {
    index: './src/index',
    alert: './src/alert',
    avatar: './src/avatar',
    badge: './src/badge',
    box: './src/box',
    breadcrumb: './src/breadcrumb',
    button: './src/button',
    card: './src/card',
    checkbox: './src/checkbox',
    'circular-progress': './src/circular-progress',
    collapse: './src/collapse',
    divider: './src/divider',
    hooks: './src/hooks',
    input: './src/input',
    list: './src/list',
    loader: './src/loader',
    modal: './src/modal',
    navbar: './src/navbar',
    pill: './src/pill',
    progress: './src/progress',
    radio: './src/radio',
    select: './src/select',
    'side-modal': './src/side-modal',
    skeleton: './src/skeleton',
    slider: './src/slider',
    switch: './src/switch',
    tab: './src/tab',
    table: './src/table',
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
