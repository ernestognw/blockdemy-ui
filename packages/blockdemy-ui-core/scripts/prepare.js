const fs = require('fs');
const { join } = require('path');
const { entry: entries } = require('../webpack.config');

Object.keys(entries).forEach(entry => {
  if (entry === 'index') {
    fs.renameSync(join(__dirname, `../lib/${entry}.js`), join(__dirname, `../${entry}.js`));
  } else {
    fs.mkdirSync(join(__dirname, `../${entry}`));
    fs.renameSync(join(__dirname, `../lib/${entry}.js`), join(__dirname, `../${entry}/index.js`));
  }
});
