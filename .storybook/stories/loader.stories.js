/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Box from 'blockdemy-ui/box';
import Loader, { LoaderContainer } from 'blockdemy-ui/loader';
import { brandColors } from '../utils';

const Simple = () => (
  <Box p={30} display="flex" width={1} justifyContent="center">
    {brandColors.map((color, index) => (
      <LoaderContainer key={color}>
        <Loader mx={20} size={(index * 5 + 15).toString()} />
      </LoaderContainer>
    ))}
  </Box>
);

const Colors = () => (
  <Box p={30} display="flex" width={1} justifyContent="center">
    {brandColors.map((color, index) => (
      <LoaderContainer key={color}>
        <Loader mx={20} color={color} size={(index * 5 + 15).toString()} />
      </LoaderContainer>
    ))}
  </Box>
);

const title = 'Loader';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add('Simple', Simple)
  .add('Colors', Colors);

export default {
  title
};
