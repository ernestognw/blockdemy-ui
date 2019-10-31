import React, { Fragment } from "react";
import { configure, addDecorator } from "@storybook/react";
import BlockdemyUI from "../src";
import Toast from "../src/toast";

const { BlockdemyUIProvider, getTheme } = new BlockdemyUI();
const { toast } = new Toast();

addDecorator(story => (
  <BlockdemyUIProvider>
    <Fragment>{story()}</Fragment>
  </BlockdemyUIProvider>
));

export { getTheme, toast };

const req = require.context(".", true, /\.stories\.js$/);

const load = () => {
  req.keys().forEach(req);
};

// automatically import all files ending in *.stories.js
configure(load, module);
