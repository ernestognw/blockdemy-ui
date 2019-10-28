import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import RoundInfo from "react-md-icon/dist/RoundInfo";
import Box from "../../src/box";
import Input from "../../src/input";
import { Card, CardBody, CardHeader } from "../../src/card";
import { brandColors } from "../utils";

const Simple = () => (
  <Box
    p={30}
    display="flex"
    width={1}
    alignItems="center"
    flexDirection="column"
  >
    <Card>
      <CardHeader title="Simple inputs" />
      <CardBody>
        <Input mb={30} placeholder="Simple" />
        <Input my={30} placeholder="With label" label="With label" />
        <Input my={30} placeholder="With message" message="With message" />
        <Input
          my={30}
          placeholder="With label and message"
          label="With label and message"
          message="With label and message"
        />
        <Input my={30} placeholder="With left icon" leftIcon={<RoundInfo />} />
        <Input my={30} placeholder="With prefix" prefix="prefix" />
      </CardBody>
    </Card>
  </Box>
);

const WithState = () => (
  <Box
    p={30}
    display="flex"
    width={1}
    alignItems="center"
    flexDirection="column"
  >
    <Card>
      <CardHeader title="Simple inputs" />
      <CardBody>
        <Input mb={30} placeholder="Simple" />
        <Input my={30} placeholder="With label" label="With label" />
        <Input my={30} placeholder="With message" message="With message" />
        <Input
          my={30}
          placeholder="With label and message"
          label="With label and message"
          message="With label and message"
        />
        <Input my={30} placeholder="With left icon" leftIcon={<RoundInfo />} />
        <Input my={30} placeholder="With prefix" prefix="prefix" />
      </CardBody>
    </Card>
  </Box>
);

const title = "Input";

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Card, CardHeader, CardBody]
    })
  )
  .add("Simple", Simple)
  .add("With State", WithState);

export default {
  title
};
