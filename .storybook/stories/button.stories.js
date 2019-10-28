import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Box from "../../src/box";
import Button from "../../src/button";
import { brandColors } from "../utils";

const Normal = () => (
  <Box display="flex" width={1} alignItems="center" flexDirection="column">
    {brandColors.map(color => (
      <Button key={color} my={10} color={color.toLowerCase()}>
        {color} button
      </Button>
    ))}
  </Box>
);

const Soft = () => (
  <Box display="flex" width={1} alignItems="center" flexDirection="column">
    {brandColors.map(color => (
      <Button key={color} my={10} variant="soft" color={color.toLowerCase()}>
        {color} button
      </Button>
    ))}
  </Box>
);

const Outlined = () => (
  <Box display="flex" width={1} alignItems="center" flexDirection="column">
    {brandColors.map(color => (
      <Button
        key={color}
        my={10}
        variant="outlined"
        color={color.toLowerCase()}
      >
        {color} button
      </Button>
    ))}
  </Box>
);

const Link = () => (
  <Box display="flex" width={1} alignItems="center" flexDirection="column">
    {brandColors.map(color => (
      <Button key={color} my={10} variant="link" color={color.toLowerCase()}>
        {color} button
      </Button>
    ))}
  </Box>
);

const title = "Button";

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add("Normal", Normal)
  .add("Soft", Soft)
  .add("Outlined", Outlined)
  .add("Link", Link);

export default {
  title
};
