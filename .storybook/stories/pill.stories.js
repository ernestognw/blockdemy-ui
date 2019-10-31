import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Box from "../../src/box";
import Pill from "../../src/pill";
import { brandColors } from "../utils";

const Normal = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill
          size="large"
          key={color}
          my={20}
          mx={10}
          color={color.toLowerCase()}
        >
          {color}
        </Pill>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill key={color} my={20} mx={10} color={color.toLowerCase()}>
          {color}
        </Pill>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill
          size="small"
          key={color}
          my={20}
          mx={10}
          color={color.toLowerCase()}
        >
          {color}
        </Pill>
      ))}
    </Box>
  </Box>
);

const Soft = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill
          size="large"
          key={color}
          my={20}
          mx={10}
          variant="soft"
          color={color.toLowerCase()}
        >
          {color}
        </Pill>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill
          key={color}
          my={20}
          mx={10}
          variant="soft"
          color={color.toLowerCase()}
        >
          {color}
        </Pill>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill
          size="small"
          key={color}
          my={20}
          mx={10}
          variant="soft"
          color={color.toLowerCase()}
        >
          {color}
        </Pill>
      ))}
    </Box>
  </Box>
);

const Outlined = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill
          size="large"
          key={color}
          my={20}
          mx={10}
          variant="outlined"
          color={color.toLowerCase()}
        >
          {color}
        </Pill>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill
          key={color}
          my={20}
          mx={10}
          variant="outlined"
          color={color.toLowerCase()}
        >
          {color}
        </Pill>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill
          size="small"
          key={color}
          my={20}
          mx={10}
          variant="outlined"
          color={color.toLowerCase()}
        >
          {color}
        </Pill>
      ))}
    </Box>
  </Box>
);

const Link = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill
          size="large"
          key={color}
          my={20}
          variant="link"
          color={color.toLowerCase()}
        >
          {color}
        </Pill>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill key={color} my={20} variant="link" color={color.toLowerCase()}>
          {color}
        </Pill>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Pill
          size="small"
          key={color}
          my={20}
          variant="link"
          color={color.toLowerCase()}
        >
          {color}
        </Pill>
      ))}
    </Box>
  </Box>
);

const title = "Pill";

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
