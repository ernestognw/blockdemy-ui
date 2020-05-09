const fs = require('fs');
const { join } = require('path');
const { entry: entries } = require('../webpack.config');

const recursiveDelete = path => {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(file => {
      const currPath = join(path, file);
      if (fs.lstatSync(currPath).isDirectory()) {
        recursiveDelete(currPath);
      } else {
        fs.unlinkSync(currPath);
      }
    });
    fs.rmdirSync(path);
  }
};

Object.keys(entries).forEach(entry => {
  if (entry === 'index') {
    fs.unlinkSync(join(__dirname, '../index.js'));
  } else {
    const path = `../${entry}`;
    recursiveDelete(join(__dirname, path));
  }
});

fs.rmdirSync(join(__dirname, '../lib'));
