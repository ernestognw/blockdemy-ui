import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from '../../src/box';
import Button from '../../src/button';
import { brandColors } from '../utils';

const Normal = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button size="large" key={color} my={20} mx={10} color={color.toLowerCase()}>
          {color}
        </Button>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button key={color} my={20} mx={10} color={color.toLowerCase()}>
          {color}
        </Button>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button size="small" key={color} my={20} mx={10} color={color.toLowerCase()}>
          {color}
        </Button>
      ))}
    </Box>
  </Box>
);

const Soft = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button size="large" key={color} my={20} mx={10} variant="soft" color={color.toLowerCase()}>
          {color}
        </Button>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button key={color} my={20} mx={10} variant="soft" color={color.toLowerCase()}>
          {color}
        </Button>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button size="small" key={color} my={20} mx={10} variant="soft" color={color.toLowerCase()}>
          {color}
        </Button>
      ))}
    </Box>
  </Box>
);

const Outlined = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button
          size="large"
          key={color}
          my={20}
          mx={10}
          variant="outlined"
          color={color.toLowerCase()}
        >
          {color}
        </Button>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button key={color} my={20} mx={10} variant="outlined" color={color.toLowerCase()}>
          {color}
        </Button>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button
          size="small"
          key={color}
          my={20}
          mx={10}
          variant="outlined"
          color={color.toLowerCase()}
        >
          {color}
        </Button>
      ))}
    </Box>
  </Box>
);

const Link = () => (
  <Box p={50}>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button size="large" key={color} my={20} variant="link" color={color.toLowerCase()}>
          {color}
        </Button>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button key={color} my={20} variant="link" color={color.toLowerCase()}>
          {color}
        </Button>
      ))}
    </Box>
    <Box display="flex" width={1} justifyContent="space-evenly">
      {brandColors.map(color => (
        <Button size="small" key={color} my={20} variant="link" color={color.toLowerCase()}>
          {color}
        </Button>
      ))}
    </Box>
  </Box>
);

const title = 'Button';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add('Normal', Normal)
  .add('Soft', Soft)
  .add('Outlined', Outlined)
  .add('Link', Link);

export default {
  title
};
