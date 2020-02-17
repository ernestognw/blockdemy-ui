/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Avatar from '../../src/avatar';
import Tooltip from '../../src/tooltip';
import Box from '../../src/box';
import { brandColors } from '../utils';

const maxSize = 62;

const Normal = () => (
  <Box display="flex" width={1} height="100vh" px={40} alignItems="center" justifyContent="center">
    {brandColors.map((color, index) => (
      <Tooltip key={color} align="center" tag={`${maxSize - index * 6}px avatar`}>
        <Box display="flex" justifyContent="center">
          <Avatar
            src={`https://i.pravatar.cc/100?img${Math.round(Math.random() * 70)}`}
            mx={20}
            size={maxSize - index * 6}
          />
        </Box>
      </Tooltip>
    ))}
  </Box>
);

const WithBorder = () => (
  <Box display="flex" width={1} height="100vh" px={40} alignItems="center" justifyContent="center">
    {brandColors.map((color, index) => (
      <Tooltip
        key={color}
        align="center"
        tag={`${maxSize - index * 6}px avatar with ${color.toLowerCase()} border`}
      >
        <Box display="flex" justifyContent="center">
          <Avatar
            src={`https://i.pravatar.cc/100?img${Math.round(Math.random() * 70)}`}
            mx={20}
            borderWidth="2"
            borderColor={color.toLowerCase()}
            size={maxSize - index * 6}
          />
        </Box>
      </Tooltip>
    ))}
  </Box>
);

const title = 'Avatar';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Tooltip]
    })
  )
  .add('Normal', Normal)
  .add('With Border', WithBorder);

export default {
  title
};
