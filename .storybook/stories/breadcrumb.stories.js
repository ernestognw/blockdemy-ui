/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import Box from 'blockdemy-ui/box';
import Breadcrumb from 'blockdemy-ui/breadcrumb';
import { brandColors, grayscaleColors } from '../utils';

const LastColor = () => (
  <>
    {brandColors.map(color => (
      <Box key={color} mb={20}>
        <Breadcrumb lastColor={color}>
          <a href="/">Path</a>
          <a href="/">To</a>
          <a href="/">My</a>
          <a href="/">Destination</a>
        </Breadcrumb>
      </Box>
    ))}
  </>
);

const PrevColor = () => (
  <>
    {brandColors.map(color => (
      <Box key={color} mb={20}>
        <Breadcrumb prevColor={color} lastColor="default">
          <a href="/">Path</a>
          <a href="/">To</a>
          <a href="/">My</a>
          <a href="/">Destination</a>
        </Breadcrumb>
      </Box>
    ))}
  </>
);

const Background = () => (
  <>
    {grayscaleColors.map(color => (
      <Box key={color} mb={20}>
        <Breadcrumb
          prevColor={color.includes('light') || color.includes('Light') ? 'default' : 'lighter'}
          bg={color}
        >
          <a href="/">Path</a>
          <a href="/">To</a>
          <a href="/">My</a>
          <a href="/">Destination</a>
        </Breadcrumb>
      </Box>
    ))}
  </>
);

const title = 'Breadcrumb';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add('Last color', LastColor)
  .add('Prev color', PrevColor)
  .add('Background', Background);

export default {
  title
};
