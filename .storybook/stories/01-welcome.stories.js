/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from 'blockdemy-ui/button';
import Box from 'blockdemy-ui/box';
import Avatar from 'blockdemy-ui/avatar';
import Typography from 'blockdemy-ui/typography';
import { List, ListItem, ListItemText } from 'blockdemy-ui/list';
import Logo from '../images/brand/blockdemy-black.svg';

const toBlockdemyUI = () => (
  <Box p={30}>
    <Box maxWidth={200} as="img" src={Logo} alt="https://blockchainacademy.mx" />
    <Typography variant="h1" fontStyle="italic">
      Welcome!
    </Typography>
    <Typography mb={10} variant="leadText">
      This is{' '}
      <Typography variant="leadText" color="secondary" as="a" href="https://blockchainacademy.mx">
        Blockdemy
      </Typography>
      ’s Design System.
    </Typography>
    <Typography>It’s a collection of React components designed to:</Typography>
    <List>
      <ListItem>
        <ListItemText primary="Speed up design and development velocity" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Help create consistent, beautiful, and usable UI in our various websites" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Promote best practices for accessibility and responsive web design" />
      </ListItem>
    </List>
    <Typography>We hope to accomplish these goals by:</Typography>
    <List>
      <ListItem>
        <ListItemText primary="Reducing the number of decisions needed when iterating on UI" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Reducing the amount of code duplication in our apps" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Serving as the standard for blockchainacademy.mx's visual language" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Providing easy-to-use and extensible components for anyone to consume" />
      </ListItem>
    </List>
    <Box bg="veryLightGrey" p={10} my={3}>
      <Typography fontFamily="courier">yarn add blockdemy-ui</Typography>
    </Box>
    <Box my={30} display="flex" align="center">
      <Button as="a" href="https://github.com/ernestognw/blockdemy-ui" mr={10} color="secondary">
        Github
      </Button>
      <Button as="a" href="https://www.npmjs.com/package/blockdemy-ui" color="gradient">
        npm
      </Button>
    </Box>
    <Box display="flex" alignItems="center" mt={4}>
      <Avatar src="https://avatars2.githubusercontent.com/u/33379285?s=460&v=4" size="48" mr={10} />
      <Typography as="a" href="https://github.com/ernestognw">
        - @ernestognw
      </Typography>
    </Box>
  </Box>
);

const title = 'Welcome';

storiesOf(title, module).add('to Blockdemy UI', toBlockdemyUI);

export default {
  title
};
