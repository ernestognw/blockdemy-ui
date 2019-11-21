import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Box from "../../src/box";
import Breadcrumb from "../../src/breadcrumb";
import { brandColors, grayscaleColors } from "../utils";

const LastColor = () => (
  <Fragment>
    {brandColors.map(color => (
      <Box key={color} mb={20}>
        <Breadcrumb lastColor={color.toLowerCase()}>
          <a>Path</a>
          <a>To</a>
          <a>My</a>
          <a>Destination</a>
        </Breadcrumb>
      </Box>
    ))}
  </Fragment>
);

const PrevColor = () => (
  <Fragment>
    {brandColors.map(color => (
      <Box key={color} mb={20}>
        <Breadcrumb prevColor={color.toLowerCase()} lastColor="default">
          <a>Path</a>
          <a>To</a>
          <a>My</a>
          <a>Destination</a>
        </Breadcrumb>
      </Box>
    ))}
  </Fragment>
);

const Background = () => (
  <Fragment>
    {grayscaleColors.map(color => (
      <Box key={color} mb={20}>
        <Breadcrumb
          prevColor={
            color.includes("light") || color.includes("Light")
              ? "default"
              : "lighter"
          }
          bg={color}
        >
          <a>Path</a>
          <a>To</a>
          <a>My</a>
          <a>Destination</a>
        </Breadcrumb>
      </Box>
    ))}
  </Fragment>
);

const title = "Breadcrumb";

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add("Last color", LastColor)
  .add("Prev color", PrevColor)
  .add("Background", Background);

export default {
  title
};
