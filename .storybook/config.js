import React, { Fragment } from "react";
import { configure, addDecorator } from "@storybook/react";
import BlockdemyUI from "../src";

const { BlockdemyUIProvider, getTheme } = new BlockdemyUI();

addDecorator(story => (
  <BlockdemyUIProvider>
    <Fragment>{story()}</Fragment>
  </BlockdemyUIProvider>
));

export { getTheme };

const req = require.context(".", true, /\.stories\.js$/);

const load = () => {
  req.keys().forEach(req);
};

// automatically import all files ending in *.stories.js
configure(load, module);
