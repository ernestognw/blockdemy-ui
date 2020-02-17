/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Card, CardFooter, CardBody, CardHeader } from '../../src/card';
import Box from '../../src/box';
import Button from '../../src/button';
import Typography from '../../src/typography';

const Simple = () => (
  <Box p={30} display="flex" width={1} alignItems="center" flexDirection="column">
    <Card>
      <CardBody>
        <Typography variant="leadText">This is the body of a simple card</Typography>
      </CardBody>
    </Card>
  </Box>
);

const WithHeader = () => (
  <Box p={30} display="flex" width={1} alignItems="center" flexDirection="column">
    <Card>
      <CardHeader title="Card with header" subtitle="Example of a card with header" />
      <CardBody>
        <Typography variant="leadText">This is the body of a card with header</Typography>
      </CardBody>
    </Card>
  </Box>
);

const WithFooter = () => (
  <Box p={30} display="flex" width={1} alignItems="center" flexDirection="column">
    <Card>
      <CardBody>
        <Typography variant="leadText">This is the body of a card with footer</Typography>
      </CardBody>
      <CardFooter>
        <Button color="danger" ml="auto">
          Cancel
        </Button>
        <Button color="primary" ml={5}>
          Action
        </Button>
      </CardFooter>
    </Card>
  </Box>
);

const Complete = () => (
  <Box p={30} display="flex" width={1} alignItems="center" flexDirection="column">
    <Card>
      <CardHeader title="Complete card" subtitle="Example of a complete card" />
      <CardBody>
        <Typography variant="leadText">This is the body of a complete card</Typography>
      </CardBody>
      <CardFooter>
        <Button color="danger" ml="auto">
          Cancel
        </Button>
        <Button color="primary" ml={5}>
          Action
        </Button>
      </CardFooter>
    </Card>
  </Box>
);

const title = 'Card';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Typography, Button]
    })
  )
  .add('Simple', Simple)
  .add('With Header', WithHeader)
  .add('With Footer', WithFooter)
  .add('Complete', Complete);

export default {
  title
};
