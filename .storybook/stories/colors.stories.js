/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from 'blockdemy-ui/box';
import Typography from 'blockdemy-ui/typography';
import { getTheme } from '../config.js';
import { brandColors, grayscaleColors } from '../utils';

const theme = getTheme();

const Brand = () => (
  <Box display="grid" width={1} p={20} gridGap={10} gridTemplateColumns="1fr 1fr 1fr 1fr">
    {brandColors.map(color => (
      <Box
        key={color}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={200}
        color="lighter"
        flexDirection="column"
        bg={color.toLowerCase()}
      >
        <Typography variant="heading">{color}</Typography>
        {theme.colors[color.toLowerCase()]}
      </Box>
    ))}
  </Box>
);

const Soft = () => (
  <Box display="grid" width={1} p={20} gridGap={10} gridTemplateColumns="1fr 1fr 1fr 1fr">
    {brandColors.map(color => (
      <Box
        key={color}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={200}
        color={color.toLowerCase()}
        flexDirection="column"
        bg={theme.softColors[color.toLowerCase()]}
      >
        <Typography variant="heading">{color}</Typography>
        {theme.softColors[color.toLowerCase()]}
      </Box>
    ))}
  </Box>
);

const Grayscale = () => (
  <Box display="grid" width={1} p={20} gridGap={10} gridTemplateColumns="1fr 1fr 1fr 1fr">
    {grayscaleColors.map((color, index) => (
      <Box
        key={color}
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={200}
        color={index > grayscaleColors.length / 2 ? 'darker' : 'lighter'}
        flexDirection="column"
        bg={color}
      >
        <Typography variant="heading">{color}</Typography>
        {theme.colors[color]}
      </Box>
    ))}
  </Box>
);

const title = 'Colors';

storiesOf(title, module)
  .add('Brand', Brand)
  .add('Soft', Soft)
  .add('Grayscale', Grayscale);

export default {
  title
};
