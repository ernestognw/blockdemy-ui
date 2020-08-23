/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';

import Box from 'blockdemy-ui/box';
import Progress from 'blockdemy-ui/progress';
import Slider, { Track, FilledTrack, Thumb } from 'blockdemy-ui/slider';
import { brandColors } from '../utils';

const Normal = () => {
  const [progress, setProgress] = useState(66);
  return (
    <Box p={50}>
      <Box display="flex" flexDirection="column" width={1} justifyContent="space-evenly">
        <Slider onChange={setProgress} value={progress} my={20} mx={10}>
          <Track />
          <FilledTrack />
          <Thumb />
        </Slider>
        {brandColors.map(color => (
          <Progress value={progress} width="100%" key={color} my={20} mx={10} color={color} />
        ))}
      </Box>
    </Box>
  );
};

const WithStripe = () => {
  const [progress, setProgress] = useState(66);
  return (
    <Box p={50}>
      <Box display="flex" flexDirection="column" width={1} justifyContent="space-evenly">
        <Slider onChange={setProgress} value={progress} my={20} mx={10}>
          <Track />
          <FilledTrack />
          <Thumb />
        </Slider>
        {brandColors.map(color => (
          <Progress
            stripe
            value={progress}
            width="100%"
            key={color}
            my={20}
            mx={10}
            color={color}
          />
        ))}
      </Box>
    </Box>
  );
};

const Animate = () => {
  const [progress, setProgress] = useState(66);
  return (
    <Box p={50}>
      <Box display="flex" flexDirection="column" width={1} justifyContent="space-evenly">
        <Slider onChange={setProgress} value={progress} my={20} mx={10}>
          <Track />
          <FilledTrack />
          <Thumb />
        </Slider>
        {brandColors.map(color => (
          <Progress
            animate
            value={progress}
            width="100%"
            key={color}
            my={20}
            mx={10}
            color={color}
          />
        ))}
      </Box>
    </Box>
  );
};

const Indeterminate = () => {
  const [progress, setProgress] = useState(66);
  return (
    <Box p={50}>
      <Box display="flex" flexDirection="column" width={1} justifyContent="space-evenly">
        {brandColors.map(color => (
          <Progress
            indeterminate
            value={progress}
            width="100%"
            key={color}
            my={20}
            mx={10}
            color={color}
          />
        ))}
      </Box>
    </Box>
  );
};

const title = 'Progress';

storiesOf(title, module)
  .addDecorator(
    withInfo({
      propTablesExclude: [Box]
    })
  )
  .add('Normal', Normal)
  .add('With Stripe', WithStripe)
  .add('Animated', Animate)
  .add('Indeterminate', Indeterminate);

export default {
  title
};
