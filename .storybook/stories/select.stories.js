import React, { Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import RoundInfo from "react-md-icon/dist/RoundInfo";
import Box from "../../src/box";
import Select from "../../src/select";
import { Card, CardBody, CardHeader } from "../../src/card";
import { brandColors } from "../utils";

const options = ["Option 1", "Option 2", "Option 3"];

const Simple = () => (
  <Box
    p={30}
    display="flex"
    width={1}
    alignItems="center"
    flexDirection="column"
  >
    <Card>
      <CardHeader title="Simple selects" />
      <CardBody>
        <Select mb={30} value="">
          <option value="" hidden>
            Simple
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select my={30} label="With label">
          <option value="" hidden>
            With label
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select my={30} message="With message">
          <option value="" hidden>
            With message
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select
          my={30}
          label="With label and message"
          message="With label and message"
        >
          <option value="" hidden>
            With label and message
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select my={30} leftIcon={<RoundInfo />}>
          <option value="" hidden>
            With left icon
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select my={30} prefix="prefix">
          <option value="" hidden>
            With prefix
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
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
      <CardHeader title="Simple selects" />
      <CardBody>
        <Select mb={30} success label="With success" message="With success">
          <option value="" hidden>
            With success
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select my={30} warning label="With warning" message="With warning">
          <option value="" hidden>
            With warning
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
        <Select my={30} error label="With error" message="With error">
          <option value="" hidden>
            With error
          </option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </CardBody>
    </Card>
  </Box>
);

const title = "Select";

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
