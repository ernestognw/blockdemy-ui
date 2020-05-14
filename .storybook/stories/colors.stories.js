/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';

import Box from 'blockdemy-ui/box';
import Typography from 'blockdemy-ui/typography';
import { getTheme } from '../config.js';
import { brandColors, grayscaleColors } from '../utils';

const theme = getTheme();

const Circle = ({ color, hex }) => (
  <Box mx={25} width={80}>
    <Box borderRadius="50%" height={30} width={30} flexDirection="column" bg={color} />
    <Typography fontSize="0.6rem" mb={0} mt={10}>
      {color}
    </Typography>
    <Typography fontSize="0.7rem" fontWeight={200}>
      {hex}
    </Typography>
  </Box>
);

const Default = () => (
  <Box width={1} p={20}>
    <Box my={20} mb={50} width="100%" display="flex">
      {brandColors.map(color => (
        <Circle key={color} color={color} hex={theme.colors[color]} />
      ))}
    </Box>
  </Box>
);

const Tone = () => (
  <Box width={1} p={20}>
    {brandColors.map(color => (
      <Box my={20} key={color} width="100%" display="flex">
        {new Array(9).fill().map((_, index) => (
          <Circle
            key={index}
            color={`${color}${(index + 1) * 100}`}
            hex={theme.colors[`${color}${(index + 1) * 100}`]}
          />
        ))}
      </Box>
    ))}
  </Box>
);

const Soft = () => (
  <Box width={1} p={20}>
    {brandColors.map(color => (
      <Box my={20} key={color} width="100%" display="flex">
        {new Array(9).fill().map((_, index) => (
          <Circle
            key={index}
            color={`${color}Soft${(index + 1) * 100}`}
            hex={theme.colors[`${color}Soft${(index + 1) * 100}`]}
          />
        ))}
      </Box>
    ))}
  </Box>
);

const Grayscale = () => (
  <Box width={1} p={20}>
    <Box my={20} mb={50} width="100%" display="flex">
      {grayscaleColors.map(color => (
        <Circle key={color} color={color} hex={theme.colors[color]} />
      ))}
    </Box>
  </Box>
);

const title = 'Colors';

storiesOf(title, module)
  .add('Default', Default)
  .add('Tone', Tone)
  .add('Soft', Soft)
  .add('Grayscale', Grayscale);

export default {
  title
};
