import fs from 'fs';
import { join } from 'path';
import { entry as entries } from '../webpack.config';

Object.keys(entries).forEach(entry => {
  const path = `../${entry}`;

  recursiveDelete(path);
});

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
