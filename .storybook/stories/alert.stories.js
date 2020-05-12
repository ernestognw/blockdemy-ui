/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Alert from 'blockdemy-ui/alert';
import Button from 'blockdemy-ui/button';
import Box from 'blockdemy-ui/box';
import { brandColors } from '../utils';

const Normal = () => (
  <Box display="flex" width={1} px={40} alignItems="center" flexDirection="column">
    {brandColors.map(color => (
      <Alert
        key={color}
        m={10}
        type={color}
        primary={`${color} alert`}
        secondary={`This is an example of a ${color} type of an alert`}
      >
        <Button mt={10} size="small" color={color}>
          Some Call To Action
        </Button>
      </Alert>
    ))}
  </Box>
);

const Dark = () => (
  <Box display="flex" width={1} px={40} alignItems="center" flexDirection="column">
    {brandColors.map(
      color =>
        color !== 'Default' && (
          <Alert
            key={color}
            bg="default"
            m={10}
            type={color}
            primary={`${color} alert`}
            secondary={`This is an example of a ${color} type of an alert`}
          >
            <Button variant="soft" mt={10} size="small" color={color}>
              Some Call To Action
            </Button>
          </Alert>
        )
    )}
  </Box>
);

const title = 'Alert';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Button]
    })
  )
  .add('Normal', Normal)
  .add('Dark', Dark);

export default {
  title
};
