/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Button from '../../src/button';
import Skeleton from '../../src/skeleton';
import Typography from '../../src/typography';
import Box from '../../src/box';
import { brandColors } from '../utils';

const Normal = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Box width="100%" display="flex" p={40} alignItems="center" flexDirection="column">
      <Button mb={40} onClick={() => setLoading(!loading)}>
        {loading ? 'Stop loading' : 'Start loading'}
      </Button>
      <Box my={20} width="100%">
        <Skeleton height="1rem" loading={loading}>
          <Typography>Hello world!</Typography>
        </Skeleton>
      </Box>
      <Box my={20} width="100%">
        <Skeleton height="2rem" loading={loading}>
          <Typography>Hello world!</Typography>
        </Skeleton>
      </Box>
      <Box my={20} width="100%">
        <Skeleton height="3rem" loading={loading}>
          <Typography>Hello world!</Typography>
        </Skeleton>
      </Box>
      <Box my={20} width="100%">
        <Skeleton height="4rem" loading={loading}>
          <Typography>Hello world!</Typography>
        </Skeleton>
      </Box>
      <Box my={20} width="100%">
        <Skeleton height="5rem" loading={loading}>
          <Typography>Hello world!</Typography>
        </Skeleton>
      </Box>
      <Box my={20} width="100%">
        <Skeleton height="6rem" loading={loading}>
          <Typography>Hello world!</Typography>
        </Skeleton>
      </Box>
      <Box my={20} width="100%">
        <Skeleton height="7rem" loading={loading}>
          <Typography>Hello world!</Typography>
        </Skeleton>
      </Box>
    </Box>
  );
};

const WithColor = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Box width="100%" display="flex" p={40} alignItems="center" flexDirection="column">
      <Button mb={40} onClick={() => setLoading(!loading)}>
        {loading ? 'Stop loading' : 'Start loading'}
      </Button>
      {brandColors.map((color, index) => (
        <Box key={color} my={20} width="100%">
          <Skeleton
            firstColor={brandColors[index].toLowerCase()}
            lastColor="veryLightGrey"
            height={`${index + 1}rem`}
            loading={loading}
          >
            <Typography>Hello world!</Typography>
          </Skeleton>
        </Box>
      ))}
    </Box>
  );
};

const title = 'Skeleton';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box, Button, Typography]
    })
  )
  .add('Normal', Normal)
  .add('With Color', WithColor);

export default {
  title
};
