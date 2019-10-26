import React, { Fragment } from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "../../src/button";
import Box from "../../src/box";

const Normal = () => (
  <Box display="flex" width={1} alignItems="center" flexDirection="column">
    <Button my={10} color="primary">
      Normal button
    </Button>
    <Button my={10} color="secondary">
      Normal button
    </Button>
    <Button my={10} color="info">
      Normal button
    </Button>
    <Button my={10} color="default">
      Normal button
    </Button>
    <Button my={10} color="success">
      Normal button
    </Button>
    <Button my={10} color="warning">
      Normal button
    </Button>
    <Button my={10} color="danger">
      Normal button
    </Button>
  </Box>
);

const Soft = () => (
  <Box display="flex" width={1} alignItems="center" flexDirection="column">
    <Button my={10} variant="soft" color="primary">
      Soft button
    </Button>
    <Button my={10} variant="soft" color="secondary">
      Soft button
    </Button>
    <Button my={10} variant="soft" color="info">
      Soft button
    </Button>
    <Button my={10} variant="soft" color="default">
      Soft button
    </Button>
    <Button my={10} variant="soft" color="success">
      Soft button
    </Button>
    <Button my={10} variant="soft" color="warning">
      Soft button
    </Button>
    <Button my={10} variant="soft" color="danger">
      Soft button
    </Button>
  </Box>
);

const Outlined = () => (
  <Box display="flex" width={1} alignItems="center" flexDirection="column">
    <Button my={10} variant="outlined" color="primary">
      Outlined button
    </Button>
    <Button my={10} variant="outlined" color="secondary">
      Outlined button
    </Button>
    <Button my={10} variant="outlined" color="info">
      Outlined button
    </Button>
    <Button my={10} variant="outlined" color="default">
      Outlined button
    </Button>
    <Button my={10} variant="outlined" color="success">
      Outlined button
    </Button>
    <Button my={10} variant="outlined" color="warning">
      Outlined button
    </Button>
    <Button my={10} variant="outlined" color="danger">
      Outlined button
    </Button>
  </Box>
);

const Link = () => (
  <Box display="flex" width={1} alignItems="center" flexDirection="column">
    <Button my={10} variant="link" color="primary">
      Link button
    </Button>
    <Button my={10} variant="link" color="secondary">
      Link button
    </Button>
    <Button my={10} variant="link" color="info">
      Link button
    </Button>
    <Button my={10} variant="link" color="default">
      Link button
    </Button>
    <Button my={10} variant="link" color="success">
      Link button
    </Button>
    <Button my={10} variant="link" color="warning">
      Link button
    </Button>
    <Button my={10} variant="link" color="danger">
      Link button
    </Button>
  </Box>
);

export { Normal, Soft, Outlined, Link };

export default {
  title: "Button"
};
