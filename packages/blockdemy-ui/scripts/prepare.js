import fs from 'fs';
import { entry as entries } from '../webpack.config';

Object.keys(entries).forEach(entry => {
  fs.mkdirSync(`../${entry}`);
  fs.renameSync(`../lib/${entry}.js`, `../${entry}/index.js`);
});
