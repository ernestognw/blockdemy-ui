/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Toast from 'blockdemy-ui/toast';
import BlockdemyUI from 'blockdemy-ui';

const { BlockdemyUIProvider, getTheme } = new BlockdemyUI();
const { toast } = new Toast();

addDecorator(story => (
  <BlockdemyUIProvider>
    <>{story()}</>
  </BlockdemyUIProvider>
));

export { getTheme, toast };

const req = require.context('.', true, /\.stories\.js$/);

const load = () => {
  req.keys().forEach(req);
};

// automatically import all files ending in *.stories.js
configure(load, module);
