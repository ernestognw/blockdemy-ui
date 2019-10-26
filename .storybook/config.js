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

// automatically import all files ending in *.stories.js
configure(require.context(".", true, /\.stories\.js$/), module);
