/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from 'blockdemy-ui/box';
import Avatar from 'blockdemy-ui/avatar';
import Pill from 'blockdemy-ui/pill';
import { List, ListItem, ListItemText } from 'blockdemy-ui/list';
import { Card, CardBody, CardHeader } from 'blockdemy-ui/card';
import { brandColors } from '../utils';

const Normal = () => (
  <Box p={30} display="flex" width={1} alignItems="center" flexDirection="column">
    <Card>
      <CardHeader title="Simple list" />
      <CardBody>
        <List>
          {brandColors.map((color, index) => (
            <ListItem key={color}>
              <ListItemText primary={`Item ${index + 1}`} secondary="Simple item" />
            </ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  </Box>
);

const Clickable = () => (
  <Box p={30} display="flex" width={1} alignItems="center" flexDirection="column">
    <Card>
      <CardHeader
        title="Clickable list elements"
        subtitle="A list item can be used as link with a clickable prop"
      />
      <CardBody>
        <List>
          {brandColors.map((color, index) => (
            <ListItem key={color} clickable>
              <ListItemText
                primary={`Clickable item ${index + 1}`}
                secondary="Item that takes cursor as a pointer"
              />
            </ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  </Box>
);

const Composed = () => (
  <Box p={30} display="flex" width={1} alignItems="center" flexDirection="column">
    <Card>
      <CardHeader
        title="Composed list elements"
        subtitle="A list can be used within other UI elements"
      />
      <CardBody>
        <List>
          {brandColors.map((color, index) => (
            <ListItem key={color}>
              <Avatar
                src={`https://i.pravatar.cc/100?img${Math.round(Math.random() * 70)}`}
                borderColor={color}
                borderWidth="2"
                size="40"
              />
              <ListItemText
                primary={`Composed tem ${index + 1}`}
                secondary="Composed item with Avatar and Pill indicator"
              />
              <Pill color={color} variant="soft" size="small">
                Pill indicator
              </Pill>
            </ListItem>
          ))}
        </List>
      </CardBody>
    </Card>
  </Box>
);

const title = 'List';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Card, CardBody, CardHeader, Avatar, Pill]
    })
  )
  .add('Normal', Normal)
  .add('Clickable', Clickable)
  .add('Composed', Composed);

export default {
  title
};
